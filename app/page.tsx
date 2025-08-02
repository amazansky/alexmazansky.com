import A from "./components/A";
import { HEADER_1, HEADER_2, HEADER_3 } from "./copywriting";

export default function Page() {
  return (
    <section>
      <h1 className="mb-0 text-3xl font-semibold tracking-tighter">
        {HEADER_1}
      </h1>
      <h2 className="mb-8 text-lg">{HEADER_2}</h2>
      <p className="mb-8">{HEADER_3}</p>

      <A
        href="/about"
        className="text-solarized-magenta hover:text-solarized-yellow underline"
      >
        Learn more about me
      </A>
    </section>
  );
}
