// src/lib/wordpress.js
//
// Semua komunikasi ke WordPress lewat file ini.
// Konsepnya: kita kirim "query" (mirip SQL tapi untuk GraphQL) ke satu
// endpoint yaitu /graphql, lalu WordPress balas JSON sesuai field yang kita minta.
// Bedanya dengan REST API: di GraphQL kita cuma minta field yang benar-benar
// dipakai, jadi response lebih ringkas dan tidak over-fetching.

const API_URL = import.meta.env.WORDPRESS_API_URL;

/**
 * Fungsi generik untuk kirim query ke WPGraphQL.
 * Semua fungsi di bawah (getHomepage, getPosts, dst) memakai ini.
 */
async function fetchAPI(query, variables = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    // Sebelumnya cuma "Gagal fetch dari WPGraphQL" tanpa detail - sekarang
    // pesan error asli dari WPGraphQL ikut ditampilkan supaya kelihatan
    // persis field/query mana yang bermasalah.
    const message = json.errors.map((e) => e.message).join('; ');
    throw new Error(`WPGraphQL error: ${message}`);
  }

  return json.data;
}

/**
 * 1) HOMEPAGE
 * Contoh: ambil judul situs + beberapa post terbaru untuk ditampilkan di home.
 */
export async function getHomepageData() {
  const query = `
    query HomepageQuery {
      generalSettings {
        title
        description
      }
      posts(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const data = await fetchAPI(query);
  return {
    site: data.generalSettings,
    posts: data.posts.nodes,
  };
}

/**
 * 2) BLOG LISTING (semua post, dengan pagination sederhana)
 */
export async function getAllPosts({ first = 10, after = null } = {}) {
  const query = `
    query AllPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { orderby: { field: DATE, order: DESC } }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          tags {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  const data = await fetchAPI(query, { first, after });
  return data.posts;
}

/**
 * 3) SINGLE POST (berdasarkan slug)
 * Dipakai di halaman detail post, misal: /blog/judul-artikel
 */
export async function getPostBySlug(slug) {
  const query = `
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        date
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
      }
    }
  `;

  const data = await fetchAPI(query, { slug });
  return data.post;
}

/**
 * Ambil semua slug post - dipakai getStaticPaths() supaya Astro tahu
 * halaman apa saja yang perlu di-generate saat build.
 */
export async function getAllPostSlugs() {
  const query = `
    query AllPostSlugs {
      posts(first: 1000) {
        nodes {
          slug
        }
      }
    }
  `;
  const data = await fetchAPI(query);
  return data.posts.nodes.map((p) => p.slug);
}

/**
 * 4) KATEGORI (arsip post berdasarkan kategori)
 */
export async function getPostsByCategory(categorySlug) {
  const query = `
    query PostsByCategory($categorySlug: ID!) {
      category(id: $categorySlug, idType: SLUG) {
        name
        posts {
          nodes {
            id
            title
            slug
            excerpt
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchAPI(query, { categorySlug });
  return data.category;
}

export async function getAllCategorySlugs() {
  const query = `
    query AllCategories {
      categories(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;
  const data = await fetchAPI(query);
  return data.categories.nodes.map((c) => c.slug);
}

/**
 * Daftar kategori lengkap (nama + slug) - dipakai untuk dropdown filter
 * di halaman blog listing.
 */
export async function getCategoriesList() {
  try {
    const query = `
      query CategoriesList {
        categories(first: 100, where: { hideEmpty: true }) {
          nodes {
            name
            slug
            count
          }
        }
      }
    `;
    const data = await fetchAPI(query);
    return data.categories.nodes;
  } catch (err) {
    console.error('getCategoriesList gagal, dropdown kategori dikosongkan.', err);
    return [];
  }
}

/**
 * Daftar tag lengkap - dipakai untuk dropdown filter "Semua Tag" di
 * halaman blog listing (terpisah dari filter kategori).
 */
export async function getTagsList() {
  try {
    const query = `
      query TagsList {
        tags(first: 100, where: { hideEmpty: true }) {
          nodes {
            name
            slug
            count
          }
        }
      }
    `;
    const data = await fetchAPI(query);
    return data.tags.nodes;
  } catch (err) {
    console.error('getTagsList gagal, dropdown tag dikosongkan.', err);
    return [];
  }
}

/**
 * 5) RELATED POSTS
 * Ambil beberapa post lain dari kategori yang sama, kecuali post yang
 * sedang dibuka. Dipakai di sidebar "Artikel Terkait" & "Lanjut Membaca"
 * pada halaman single artikel.
 */
export async function getRelatedPosts({ categorySlug, excludeSlug, limit = 3 }) {
  try {
    if (categorySlug) {
      const query = `
        query RelatedByCategory($categorySlug: ID!, $first: Int!) {
          category(id: $categorySlug, idType: SLUG) {
            posts(first: $first) {
              nodes {
                id
                title
                slug
                date
                featuredImage {
                  node { sourceUrl altText }
                }
              }
            }
          }
        }
      `;
      const data = await fetchAPI(query, { categorySlug, first: limit + 1 });
      const posts = data.category?.posts?.nodes ?? [];
      if (posts.length > 0) {
        return posts.filter((p) => p.slug !== excludeSlug).slice(0, limit);
      }
    }
  } catch (err) {
    // Query "related by category" gagal (misal skema WPGraphQL beda,
    // atau kategori kosong) - jangan sampai bikin seluruh halaman artikel
    // ikut error. Cukup log ke console, lalu jatuh ke fallback di bawah.
    console.error('getRelatedPosts: query kategori gagal, pakai fallback.', err);
  }

  // Fallback: kalau post tidak punya kategori, ATAU query kategori di atas
  // gagal/kosong, ambil post terbaru saja.
  try {
    const fallback = await getAllPosts({ first: limit + 1 });
    return fallback.nodes.filter((p) => p.slug !== excludeSlug).slice(0, limit);
  } catch (err) {
    console.error('getRelatedPosts: fallback juga gagal.', err);
    return [];
  }
}
