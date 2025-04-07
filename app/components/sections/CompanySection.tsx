import Image from "next/image";
import Link from "next/link";

interface CompanySectionProps {
  theme: string;
}

export default function CompanySection({ theme }: CompanySectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-black" : "bg-white"}`} />
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">Das Unternehmen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className={`text-text ${theme === "dark" ? "text-white" : ""}`}>
              Individual System ist ein führender Anbieter von maßgeschneiderten Lösungen im Bereich der optischen
              Messtechnik und Automatisierungstechnik. Wir entwickeln und fertigen Sondermaschinen, die genau auf die
              Anforderungen unserer Kunden zugeschnitten sind.
            </p>
            <p className={`text-muted ${theme === "dark" ? "text-white" : ""}`}>
              Wir sind ein führendes Unternehmen im Bereich der technischen Dienstleistungen und bieten innovative
              Lösungen für komplexe Herausforderungen.
            </p>
            <Link
              href="/about"
              className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "bg-button text-button-text border border-button-border hover:bg-button-hover hover:text-button-hover-text"
                  : "bg-white text-primary border border-primary hover:bg-primary/10"
              }`}
            >
              Das Team
            </Link>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden border border-primary/30">
            <Image
              src={theme === "dark" ? "/hero-bg.jpg" : "/hero-bg-white.jpg"}
              alt="Company Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-heading mb-2">Präzision & Innovation</h3>
                <p className={`text-card-text ${theme === "dark" ? "text-white" : ""}`}>
                  Unsere Technologie definiert neue Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
