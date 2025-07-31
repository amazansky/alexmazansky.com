import A from "./A";

export default function Footer() {
  return (
    <footer className="my-20 lg:sticky lg:top-20">
      I'm also on:
      <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {/* <li>
          <A href="/rss" forceExternal={true}>
            rss
          </A>
        </li> */}
        <li>
          <A href="https://github.com/amazansky">github</A>
        </li>
        <li>
          <A href="https://www.linkedin.com/in/alex-mazansky/">linkedin</A>
        </li>
      </ul>
      {/* <p className="mt-8 text-muted-foreground">
        © {new Date().getFullYear()} Alex Mazansky
      </p> */}
    </footer>
  );
}
