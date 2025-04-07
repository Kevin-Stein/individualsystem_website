import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  theme: string;
}

export default function Footer({ theme }: FooterProps) {
  return (
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
  );
}
