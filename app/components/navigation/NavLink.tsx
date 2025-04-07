import Link from "next/link";
import React from "react";

export interface NavLinkProps {
  href: string;
  theme: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export function NavLink({ href, theme, onClick, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`nav-link ${
        theme === "light"
          ? "text-primary hover:text-primary/80 hover:bg-primary/10"
          : "text-primary hover:bg-primary/10"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export function MobileNavLink({ href, theme, onClick, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`block py-2 nav-link ${
        theme === "light"
          ? "text-primary hover:text-primary/80 hover:bg-primary/10"
          : "text-primary hover:bg-primary/10"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
