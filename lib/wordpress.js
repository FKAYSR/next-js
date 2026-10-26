const API_URL = `${process.env.WORDPRESS_URL}/wp-json/wp/v2`;

export async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);
  const posts = await response.json();
  return posts;
}

export async function getLatestPosts() { … }

export async function getPostBySlug(slug) { … }

export async function getPageBySlug(slug) { … }