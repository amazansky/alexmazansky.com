import { NAME } from "app/copywriting";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import A from "./A";
import { ThemeToggle } from "./theme-toggle";

const navItems = {
  "/": {
    name: "Home",
    bold: false,
  },
  "/posts": {
    name: "Thoughts",
    bold: false,
  },
  "/projects": {
    name: "Projects",
    bold: false,
  },
};

const socialItems = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/amazansky",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/alex-mazansky/",
  },
];

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <p className="text-xl tracking-tight">{NAME}</p>
        <nav
          className="flex flex-row items-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-3 sm:space-x-4 pr-3 flex-1">
            {Object.entries(navItems).map(([path, { name, bold }]) => {
              return (
                <A
                  key={path}
                  href={path}
                  className={`transition-all flex items-center relative py-1 ${
                    bold ? "font-semibold whitespace-nowrap" : ""
                  }`}
                >
                  {name}
                </A>
              );
            })}
          </div>
          <div className="flex flex-row items-center space-x-3 sm:space-x-4">
            {socialItems.map((item) => (
              <A
                key={item.name}
                href={item.href}
                supressExternalArrow={true}
                aria-label={item.name}
                className="flex items-center py-1"
              >
                {item.icon}
              </A>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
