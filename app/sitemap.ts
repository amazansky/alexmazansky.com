import { getBlogPosts, getDateParts } from "app/posts/utils";

export const baseUrl = "https://alexmazansky.com";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => {
    const { year, month, day } = getDateParts(post.metadata.publishedAt);

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
