import { getBlogPosts } from "app/posts/utils";

export const baseUrl = "https://alexmazansky.com";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => {
    const date = new Date(post.metadata.publishedAt);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return {
      url: `${baseUrl}/posts/${year}/${month}/${day}/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    };
  });

  let routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
