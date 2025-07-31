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
            <A
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={url}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="w-[100px] tabular-nums text-muted-foreground">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="tracking-tight">{post.metadata.title}</p>
              </div>
            </A>
          );
        })}
    </div>
  );
}
