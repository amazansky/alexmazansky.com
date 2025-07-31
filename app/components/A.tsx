import Link from "next/link";

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  forceExternal?: boolean;
}

export default function A({
  href,
  children,
  className = "",
  forceExternal = false,
  ...props
}: AProps) {
  // Check if it's an internal link
  if (href.startsWith("/") && !forceExternal) {
    return (
      <Link
        href={href}
        className={`text-primary hover:text-accent transition-all ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Check if it's a hash link
  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        className={`text-primary hover:text-accent transition-all ${className}`}
        {...props}
      >
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
      className={`text-primary hover:text-accent transition-all ${className}`}
      {...props}
    >
      {children} ↗
    </a>
  );
}
