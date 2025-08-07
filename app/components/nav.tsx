"use client";

import Link from "next/link";
import A from "./A";
import { ThemeToggle } from "./theme-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/contact": {
    name: "contact",
  },
  "/posts": {
    name: "posts",
  },
  "/projects": {
    name: "projects",
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-4 pr-10 flex-1">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <A
                  key={path}
                  href={path}
                  className="transition-all flex align-middle relative py-1"
                >
                  {name}
                </A>
              );
            })}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  );
}
