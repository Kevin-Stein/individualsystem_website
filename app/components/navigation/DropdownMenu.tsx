import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface DropdownMenuProps {
  theme: string;
  label: string;
  items: {
    href: string;
    label: string;
    onClick?: () => void;
  }[];
}

export function DropdownMenu({ theme, label, items }: DropdownMenuProps) {
  return (
    <div className="relative group">
      <button
        className={`nav-link flex items-center ${
          theme === "light" ? "text-primary hover:text-primary/80 hover:bg-primary/10" : ""
        }`}
      >
        {label} <ChevronDown className="h-4 w-4 ml-1" />
      </button>
      <div
        className={`absolute hidden group-hover:block w-[200px] p-2 rounded-md shadow-lg ${
          theme === "dark" ? "bg-dropdown" : "bg-white border border-primary/20"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block p-2 rounded-md transition-colors ${
              theme === "dark" ? "text-dropdown-text hover:bg-dropdown-hover" : "text-primary hover:bg-primary/10"
            }`}
            onClick={item.onClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
