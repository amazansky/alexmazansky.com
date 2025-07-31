import A from "./components/A";

export default function Page() {
  return (
    <section>
      <h1 className="mb-0 text-3xl font-semibold tracking-tighter">
        Hi, I'm Alex Mazansky
      </h1>
      <h2 className="mb-4 text-lg">
        a senior at Brown University studying Computer Science.
      </h2>
      <p className="mb-8">
        I'm an ambitious problem-solver, blending technical expertise with
        creative insights to address meaningful challenges.
      </p>

      <A
        href="/about"
        className="text-solarized-magenta hover:text-solarized-yellow underline"
      >
        Learn more about me
      </A>
    </section>
  );
}
