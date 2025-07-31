import Link from "next/link";

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function A({
  href,
  children,
  className = "",
  ...props
}: AProps) {
  // Check if it's an internal link
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={`underline ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  // Check if it's a hash link
  if (href.startsWith("#")) {
    return (
      <a href={href} className={`underline ${className}`} {...props}>
        {children}
      </a>
    );
  }

  // External link - add target="_blank", rel, and styling
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline hover:text-neutral-900 dark:hover:text-neutral-100 ${className}`}
      {...props}
    >
      {children} ↗
    </a>
  );
}
