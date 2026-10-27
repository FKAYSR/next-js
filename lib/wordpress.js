const API_URL = `${process.env.WORDPRESS_URL}/wp-json/wp/v2`;

async function fetchWordPress(path) {
  const response = await fetch(`${API_URL}${path}`);

  console.log("WordPress response:", {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
  });

  if (!response.ok) {
    throw new Error(`WordPress responded with ${response.status}`);
  }

  return response.json();
}

export async function getPosts() {
  return fetchWordPress("/posts?_embed");
}

export async function getLatestPosts() {
  return fetchWordPress("/posts?per_page=3&_embed");
}

export async function getPostBySlug(slug) {
  const posts = await fetchWordPress(`/posts?slug=${slug}&_embed`);
  return posts[0];
}

export async function getPageBySlug(slug) {
  const pages = await fetchWordPress(`/pages?slug=${slug}&_embed`);
  return pages[0];
}