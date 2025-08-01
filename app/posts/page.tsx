import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Posts",
  description:
    "Musings from the mind of a curious engineer, entrepreneur, and explorer.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Posts</h1>
      <BlogPosts />
    </section>
  );
}
