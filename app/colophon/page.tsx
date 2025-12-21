import A from "app/components/A";
import { Fragment } from "react";

export const metadata = {
  title: "Colophon",
};

const inspirations = [
  {
    name: "Alex Studer",
    url: "https://alex.studer.dev/",
  },
  {
    name: "Will Barkoff",
    url: "https://willbarkoff.dev/",
  },
  {
    name: "Thomas Gordon",
    url: "https://metaterminal.fyi/",
  },
  {
    name: "Jack Wrenn",
    url: "https://jack.wrenn.fyi/",
  },
  {
    name: "Paul Lestz",
    url: "https://paullestz.com/",
  },
  {
    name: "Chloe Qiao",
    url: "https://www.qiaochloe.com/",
  },
];

export default function Colophon() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Colophon</h1>
      <div className="space-y-8">
        <div className="prose">
          <p>
            This site is generated with{" "}
            <A href="https://nextjs.org/">Next.js</A> and styled with{" "}
            <A href="https://tailwindcss.com/">Tailwind CSS</A>. It is a heavily
            modified fork of Vercel's{" "}
            <A href="https://github.com/vercel/examples/tree/main/solutions/blog">
              Portfolio Blog Starter
            </A>
            . All text is typeset in <A href="https://vercel.com/font">Geist</A>
            , and the color scheme is{" "}
            <A href="https://ethanschoonover.com/solarized/">Solarized</A>.
          </p>
          <p>
            My domain is registered with{" "}
            <A href="https://porkbun.com/">Porkbun</A>, and the site is deployed
            on <A href="https://vercel.com/">Vercel</A>.
          </p>
          <p>
            I've had a website since{" "}
            <A href="https://github.com/amazansky/alexmazansky.com-jekyll/commit/075608064d9ce3aab7a764dcce150b9d6cd1b6f7">
              May 2016
            </A>
            . Since then it has been through several major redesigns, most
            recently in{" "}
            <A href="https://web.archive.org/web/20211211075133/https://amazansky.com/">
              March 2021
            </A>{" "}
            and{" "}
            <A href="https://web.archive.org/web/20241104232353/https://alexmazansky.com/">
              October 2024
            </A>
            , with lots of minor tweaks and two domain name changes along the
            way. The current design was made in July 2025, when I switched from{" "}
            <A href="https://jekyllrb.com/">Jekyll</A> to Next.js.
          </p>
          <p>
            This website's design and content have been inspired over time by
            the works of{" "}
            {inspirations.map((inspiration, idx) => {
              console.log(idx);
              return (
                <Fragment key={idx}>
                  <A href={inspiration.url} className="whitespace-nowrap">
                    {inspiration.name}
                  </A>
                  {idx < inspirations.length - 2
                    ? ", "
                    : idx === inspirations.length - 2
                    ? ", and "
                    : ""}
                </Fragment>
              );
            })}
            , among many others.
          </p>
        </div>
      </div>
    </section>
  );
}
