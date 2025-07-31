import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-0 text-3xl font-semibold tracking-tighter">
        Hi, I'm Alex Mazansky
      </h1>
      <h2 className="mb-4 text-lg">
        a senior at Brown University studying Computer Science.
      </h2>
      <p className="mb-4">
        I'm an ambitious problem-solver, blending technical expertise with
        creative insights to address meaningful challenges.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
