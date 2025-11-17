import { EMAIL, HEADER_1, HEADER_2 } from "app/copywriting";
import A from "./A";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 text-sm">
      <hr className="border-dashed text-solarized-base0" />
      <div className="pt-6 flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
        {/* Left column */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold tracking-tight">{HEADER_1}</h3>
          <p className="text-muted-foreground tracking-tight">{HEADER_2}</p>
          <ul className="mt-2">
            <li className="pb-2">
              <A href={`mailto:${EMAIL}`}>{EMAIL}</A>
            </li>
            <li>
              <A href="https://github.com/amazansky">GitHub</A>
            </li>
            <li>
              <A href="https://www.linkedin.com/in/alex-mazansky/">LinkedIn</A>
            </li>
          </ul>
        </div>
        {/* Right column */}
        <div className="flex-1">
          <ul>
            <li className="pb-2">
              <A href="/">Home</A>
            </li>
            <li>
              <A href="/projects">Projects</A>
            </li>
            <li className="pb-2">
              <A href="/posts">Writing</A>
            </li>
            <li className="pb-2">
              <A href="/colophon">Colophon</A>
            </li>
            <li>
              <A href="/rss">RSS</A>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
