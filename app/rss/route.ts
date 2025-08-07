import { NAME } from "app/copywriting";
import {
  getBlogPosts,
  getDateParts,
  parsePublishedDate,
} from "app/posts/utils";
import { baseUrl } from "app/sitemap";

export async function GET() {
  let allBlogs = await getBlogPosts();

  const itemsXml = allBlogs
    .sort(
      (a, b) =>
        parsePublishedDate(b.metadata.publishedAt).getTime() -
        parsePublishedDate(a.metadata.publishedAt).getTime()
    )
    .map((post) => {
      const { year, month, day } = getDateParts(post.metadata.publishedAt);
      const url = `${baseUrl}/posts/${year}/${month}/${day}/${post.slug}`;

      return `<item>
          <title>${post.metadata.title}</title>
          <link>${url}</link>
          <description>${post.metadata.subtitle || ""}</description>
          <pubDate>${parsePublishedDate(
            post.metadata.publishedAt
          ).toUTCString()}</pubDate>
        </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${NAME}</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
