import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NavLink, MobileNavLink } from "../navigation/NavLink";
import { DropdownMenu } from "../navigation/DropdownMenu";

interface HeaderProps {
  theme: string;
  onThemeChange: (theme: string) => void;
}

export default function Header({ theme, onThemeChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      setMenuHeight(mobileMenuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isMenuOpen]);

  const standardsItems = [
    { href: "/standards/quality", label: "Quality" },
    { href: "/standards/certification", label: "Certification" },
  ];

  const mobileStandardsItems = standardsItems.map((item) => ({
    ...item,
    onClick: () => setIsMenuOpen(false),
  }));

  return (
    <header className="sticky top-0 z-50 w-full bg-header backdrop-blur supports-[backdrop-filter]:bg-header/60">
      <div className="w-full max-w-[1200px] mx-auto px-4 flex h-16 md:h-32 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={theme === "dark" ? "/logo-white.svg" : "/logo-black.svg"}
            alt="Individual System Logo"
            width={200}
            height={50}
            className="h-[30px] w-[120px] md:h-[50px] md:w-[200px]"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-md ${theme === "dark" ? "text-primary" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" theme={theme}>
            Home
          </NavLink>
          <NavLink href="/team" theme={theme}>
            Team
          </NavLink>
          <NavLink href="/impressionen" theme={theme}>
            Impressionen
          </NavLink>
          <DropdownMenu theme={theme} label="Standards" items={standardsItems} />
          <NavLink href="/impressum" theme={theme}>
            Impressum
          </NavLink>
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

      {/* Mobile Navigation */}
      <div className="md:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: menuHeight }}>
        <div ref={mobileMenuRef} className="w-full max-w-[1200px] mx-auto px-4 py-2">
          <div className="px-4 py-2 space-y-2 w-fit">
            <MobileNavLink href="/" theme={theme} onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/team" theme={theme} onClick={() => setIsMenuOpen(false)}>
              Team
            </MobileNavLink>
            <MobileNavLink href="/impressionen" theme={theme} onClick={() => setIsMenuOpen(false)}>
              Impressionen
            </MobileNavLink>
            <DropdownMenu theme={theme} label="Standards" items={mobileStandardsItems} />
            <MobileNavLink href="/impressum" theme={theme} onClick={() => setIsMenuOpen(false)}>
              Impressum
            </MobileNavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
