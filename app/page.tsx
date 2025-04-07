"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Sun, Moon } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background moved here */}
      <div className="absolute inset-0 z-0">
        <Image
          src={theme === "dark" ? "/hero-bg.jpg" : "/hero-bg-white.jpg"}
          alt="Hero background pattern"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay still applies to the background */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent dark:from-black"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-header backdrop-blur-md">
        <div className="container flex h-24 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <div className="relative w-[180px] h-[45px]">
                <Image
                  src={theme === "dark" ? "/logo-white.svg" : "/logo-black.svg"}
                  alt="Individual System Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/team" className="nav-link">
                Team
              </Link>
              <Link href="/impressionen" className="nav-link">
                Impressionen
              </Link>
              <div className="relative group">
                <button className="nav-link flex items-center">
                  Standards <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute hidden group-hover:block w-[200px] p-2 bg-dropdown rounded-md shadow-lg">
                  <Link
                    href="/standards/quality"
                    className="block p-2 rounded-md hover:bg-dropdown-hover text-dropdown-text"
                  >
                    Quality
                  </Link>
                  <Link
                    href="/standards/certification"
                    className="block p-2 rounded-md hover:bg-dropdown-hover text-dropdown-text"
                  >
                    Certification
                  </Link>
                </div>
              </div>
              <Link href="/impressum" className="nav-link">
                Impressum
              </Link>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="p-2 text-text" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-[600px] w-full overflow-hidden pt-24">
        <div className="relative container h-full flex flex-col justify-center items-start">
          <div className="mb-8 relative w-[350px] h-[90px] md:w-[400px] md:h-[100px]">
            <Image
              src={theme === "dark" ? "/logo-white.svg" : "/logo-black.svg"}
              alt="Individual System Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl text-hero-subtext max-w-2xl mb-10">
            Der Sondermaschinenbauer für optische Mess- und Automatisierungstechnik
          </p>
          <button className="px-6 py-3 bg-button text-button-text border border-button-border rounded-md font-medium transition-colors hover:bg-button-hover hover:text-button-hover-text">
            Mehr erfahren
          </button>
        </div>
      </section>

      {/* Company Section */}
      <section className="py-16 bg-section-alt relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-section-overlay"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">Das Unternehmen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-text">
                Individual System ist ein führender Anbieter von maßgeschneiderten Lösungen im Bereich der optischen
                Messtechnik und Automatisierungstechnik. Wir entwickeln und fertigen Sondermaschinen, die genau auf die
                Anforderungen unserer Kunden zugeschnitten sind.
              </p>
              <p className="text-text">
                Mit jahrelanger Erfahrung und einem engagierten Team von Ingenieuren und Technikern bieten wir
                innovative Lösungen für komplexe technische Herausforderungen.
              </p>
              <button className="px-6 py-2 bg-button text-button-text border border-button-border rounded-md font-medium transition-colors hover:bg-button-hover hover:text-button-hover-text">
                Über uns
              </button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden border border-primary/30">
              <Image src="/hero-bg.jpg" alt="Golden geometric pattern" fill className="object-cover" />
              <div className="absolute inset-0 bg-card-overlay flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-heading mb-2">Präzision & Innovation</h3>
                  <p className="text-card-text">Unsere Technologie definiert neue Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-section relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-section-overlay-alt"></div>
        </div>
        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">Unsere Dienstleistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card backdrop-blur-sm p-6 rounded-lg border border-card-border hover:border-primary transition-colors">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-icon"
                >
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                  <path d="M5.3 10.8a10 10 0 0 0 0 2.4" />
                  <path d="M10.8 5.3a10 10 0 0 1 2.4 0" />
                  <path d="M10.8 18.7a10 10 0 0 0 2.4 0" />
                  <path d="M18.7 10.8a10 10 0 0 1 0 2.4" />
                  <path d="M15.5 7.5a6.5 6.5 0 0 1 0 9" />
                  <path d="M7.5 7.5a6.5 6.5 0 0 0 0 9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Ingenieurdienstleistung</h3>
              <p className="text-muted">
                Wir bieten umfassende Ingenieurdienstleistungen für die Entwicklung und Optimierung von technischen
                Systemen.
              </p>
            </div>
            <div className="bg-card backdrop-blur-sm p-6 rounded-lg border border-card-border hover:border-primary transition-colors">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-icon"
                >
                  <path d="M3 3v18h18" />
                  <path d="m7 17 4-4 4 4 6-6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Projektmanagement</h3>
              <p className="text-muted">
                Professionelles Projektmanagement für die erfolgreiche Umsetzung komplexer technischer Projekte.
              </p>
            </div>
            <div className="bg-card backdrop-blur-sm p-6 rounded-lg border border-card-border hover:border-primary transition-colors">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-icon"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M8 18v-1" />
                  <path d="M16 18v-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Automatisierungstechnik</h3>
              <p className="text-muted">
                Entwicklung und Implementation von maßgeschneiderten Automatisierungslösungen für Ihre
                Produktionsprozesse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-section-alt relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-section-overlay"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">Kontaktieren Sie uns</h2>
              <p className="text-text mb-6">
                Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Kontaktieren Sie uns noch
                heute.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-text">+49 123 456 7890</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-text">info@individual-system.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-text">Musterstraße 123, 12345 Musterstadt, Deutschland</span>
                </div>
              </div>
            </div>
            <div className="bg-form backdrop-blur-sm p-6 rounded-lg border border-form-border">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-label">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 bg-input border border-input-border rounded-md text-input-text focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-label">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 bg-input border border-input-border rounded-md text-input-text focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-label">
                    Betreff
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 bg-input border border-input-border rounded-md text-input-text focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-label">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-input border border-input-border rounded-md text-input-text focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 bg-button text-button-text border border-button-border rounded-md font-medium transition-colors hover:bg-button-hover hover:text-button-hover-text">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-footer border-t border-border relative overflow-hidden z-10">
        <div className="absolute inset-0">
          <Image
            src={theme === "dark" ? "/hero-bg.jpg" : "/hero-bg-white.jpg"}
            alt="Footer background pattern"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-footer-overlay"></div>
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="relative w-[180px] h-[45px] mb-4">
                <Image
                  src={theme === "dark" ? "/logo-white.svg" : "/logo-black.svg"}
                  alt="Individual System Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-footer-text text-sm">Spezialist für optische Mess- und Automatisierungstechnik</p>
            </div>
            <div>
              <h3 className="text-heading font-medium mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-footer-text hover:text-primary text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-footer-text hover:text-primary text-sm">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/impressionen" className="text-footer-text hover:text-primary text-sm">
                    Impressionen
                  </Link>
                </li>
                <li>
                  <Link href="/standards" className="text-footer-text hover:text-primary text-sm">
                    Standards
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="text-footer-text hover:text-primary text-sm">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-heading font-medium mb-4">Dienstleistungen</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/engineering" className="text-footer-text hover:text-primary text-sm">
                    Ingenieurdienstleistung
                  </Link>
                </li>
                <li>
                  <Link href="/services/project-management" className="text-footer-text hover:text-primary text-sm">
                    Projektmanagement
                  </Link>
                </li>
                <li>
                  <Link href="/services/automation" className="text-footer-text hover:text-primary text-sm">
                    Automatisierungstechnik
                  </Link>
                </li>
                <li>
                  <Link href="/services/measurement" className="text-footer-text hover:text-primary text-sm">
                    Messtechnik
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-heading font-medium mb-4">Rechtliches</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/datenschutz" className="text-footer-text hover:text-primary text-sm">
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="text-footer-text hover:text-primary text-sm">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="text-footer-text hover:text-primary text-sm">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-footer-copyright text-sm">
              © {new Date().getFullYear()} Individual System. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <div className="fixed bottom-0 left-0 right-0 bg-cookie backdrop-blur-sm border-t border-border p-4 z-50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-cookie-text text-sm">
            Diese Webseite verwendet Cookies, um Besuchern ein optimales Nutzererlebnis zu bieten. Weitere Informationen
            hierzu in der Datenschutzerklärung.
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-button text-button-text border border-button-border rounded-md font-medium transition-colors hover:bg-button-hover hover:text-button-hover-text">
              Einstellungen
            </button>
            <button className="px-4 py-2 bg-button text-button-text border border-button-border rounded-md font-medium transition-colors hover:bg-button-hover hover:text-button-hover-text">
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
