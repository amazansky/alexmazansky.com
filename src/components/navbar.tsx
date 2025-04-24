import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <Link href="/" className="px-1">
        Alex Mazansky
      </Link>
      <Link href="/about" className="px-1">
        About
      </Link>
      <Link href="/contact" className="px-1">
        Contact
      </Link>
      <Link href="/posts" className="px-1">
        Posts
      </Link>
      <Link href="/projects" className="px-1">
        Projects
      </Link>
    </div>
  );
}
