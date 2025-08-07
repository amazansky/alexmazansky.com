import {
  formatDate,
  getBlogPosts,
  getDateParts,
  parsePublishedDate,
} from "app/posts/utils";
import A from "./A";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort(
          (a, b) =>
            parsePublishedDate(b.metadata.publishedAt).getTime() -
            parsePublishedDate(a.metadata.publishedAt).getTime()
        )
        .map((post) => {
          const { year, month, day } = getDateParts(post.metadata.publishedAt);
          const url = `/posts/${year}/${month}/${day}/${post.slug}`;

          return (
            <div
              key={post.slug}
              className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2"
            >
              <p className="w-[100px] flex-none tabular-nums tracking-tight md:tracking-normal">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="tracking-tight mb-4">
                <span>
                  <A href={url}>{post.metadata.title}</A>
                </span>
                {post.metadata.subtitle && (
                  <p className="text-sm">
                    <em>{post.metadata.subtitle}</em>
                  </p>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
