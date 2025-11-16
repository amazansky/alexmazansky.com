import Link from "next/link";

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  supressExternalArrow?: boolean;
}

export default function A({
  href,
  children,
  className = "",
  supressExternalArrow = false,
  ...props
}: AProps) {
  // Base classes for the growing underline effect
  const baseClasses =
    "text-primary hover:text-accent transition-all relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-current before:transition-all before:duration-300 hover:before:w-full";

  // Check if it's an internal link
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  // Check if it's a hash link
  if (href.startsWith("#")) {
    return (
      <a href={href} className={`${baseClasses} ${className}`} {...props}>
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
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
      {!supressExternalArrow && (
        <span style={{ userSelect: "none" }} aria-hidden="true">
          {" "}
          ↗
        </span>
      )}
    </a>
  );
}
