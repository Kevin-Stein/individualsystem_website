import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon, ChevronDown } from "lucide-react";

interface HeaderProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

export default function Header({ theme, onThemeChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-header backdrop-blur supports-[backdrop-filter]:bg-header/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={theme === "dark" ? "/logo-white.svg" : "/logo-black.svg"}
            alt="Individual System Logo"
            width={200}
            height={50}
            className="h-[50px] w-[200px]"
            priority
          />
        </Link>

        <nav className="flex items-center space-x-8">
          <Link
            href="/"
            className={`nav-link ${theme === "light" ? "text-primary hover:text-primary/80 hover:bg-primary/10" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/team"
            className={`nav-link ${theme === "light" ? "text-primary hover:text-primary/80 hover:bg-primary/10" : ""}`}
          >
            Team
          </Link>
          <Link
            href="/impressionen"
            className={`nav-link ${theme === "light" ? "text-primary hover:text-primary/80 hover:bg-primary/10" : ""}`}
          >
            Impressionen
          </Link>
          <div className="relative group">
            <button
              className={`nav-link flex items-center ${
                theme === "light" ? "text-primary hover:text-primary/80 hover:bg-primary/10" : ""
              }`}
            >
              Standards <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div
              className={`absolute hidden group-hover:block w-[200px] p-2 rounded-md shadow-lg ${
                theme === "dark" ? "bg-dropdown" : "bg-white border border-primary/20"
              }`}
            >
              <Link
                href="/standards/quality"
                className={`block p-2 rounded-md transition-colors ${
                  theme === "dark" ? "text-dropdown-text hover:bg-dropdown-hover" : "text-primary hover:bg-primary/10"
                }`}
              >
                Quality
              </Link>
              <Link
                href="/standards/certification"
                className={`block p-2 rounded-md transition-colors ${
                  theme === "dark" ? "text-dropdown-text hover:bg-dropdown-hover" : "text-primary hover:bg-primary/10"
                }`}
              >
                Certification
              </Link>
            </div>
          </div>
          <Link
            href="/impressum"
            className={`nav-link ${theme === "light" ? "text-primary hover:text-primary/80 hover:bg-primary/10" : ""}`}
          >
            Impressum
          </Link>
        </nav>
        <button
          onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
          className={`p-2 rounded-full transition-colors ${
            theme === "dark"
              ? "bg-primary/10 text-primary hover:bg-primary/20"
              : "bg-white text-primary hover:bg-primary/10"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}
