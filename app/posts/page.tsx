import A from "app/components/A";
import {
  formatDate,
  getBlogPosts,
  getDateParts,
  parsePublishedDate,
} from "app/posts/utils";

const sortedPosts = getBlogPosts().sort((a, b) => {
  return (
    parsePublishedDate(b.metadata.publishedAt).getTime() -
    parsePublishedDate(a.metadata.publishedAt).getTime()
  );
});

export const metadata = {
  title: "Thoughts",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Thoughts</h1>
      <div>
        {sortedPosts.map((post) => {
          const { year, month, day } = getDateParts(post.metadata.publishedAt);
          const url = `/posts/${year}/${month}/${day}/${post.slug}`;

          return (
            <div
              key={post.slug}
              className="flex flex-col sm:flex-row justify-between sm:space-x-8 pb-4 mb-4 border-b border-muted-border border-dashed last:border-b-0"
            >
              <div>
                <p>
                  <A href={url}>{post.metadata.title}</A>
                </p>
                <p className="text-sm italic text-muted-foreground tracking-tight">
                  {post.metadata.subtitle}
                </p>
              </div>
              <div className="flex-none sm:w-16 sm:text-right">
                <p className="text-sm tracking-tight">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
