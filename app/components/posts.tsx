import { formatDate, getBlogPosts, getDateParts } from "app/posts/utils";
import A from "./A";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          const { year, month, day } = getDateParts(post.metadata.publishedAt);
          const url = `/posts/${year}/${month}/${day}/${post.slug}`;

          return (
            <div
              key={post.slug}
              className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2"
            >
              <p className="w-[100px] tabular-nums text-muted-foreground tracking-tight md:tracking-normal">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="tracking-tight mb-4">
                <span>
                  <A href={url}>{post.metadata.title}</A>
                </span>
                {post.metadata.subtitle && (
                  <p className="text-sm text-muted-foreground">
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
