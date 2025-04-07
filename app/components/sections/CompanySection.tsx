import Image from "next/image";
import Link from "next/link";

interface CompanySectionProps {
  theme: string;
}

export default function CompanySection({ theme }: CompanySectionProps) {
  return (
    <section className="py-16 bg-section-alt relative overflow-hidden z-10">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">Das Unternehmen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-text">
              Individual System ist ein führender Anbieter von maßgeschneiderten Lösungen im Bereich der optischen
              Messtechnik und Automatisierungstechnik. Wir entwickeln und fertigen Sondermaschinen, die genau auf die
              Anforderungen unserer Kunden zugeschnitten sind.
            </p>
            <p className="text-text">
              Mit jahrelanger Erfahrung und einem engagierten Team von Ingenieuren und Technikern bieten wir innovative
              Lösungen für komplexe technische Herausforderungen.
            </p>
            <Link
              href="/about"
              className="px-6 py-2 bg-button text-button-text border border-button-border rounded-md font-medium transition-colors hover:bg-button-hover hover:text-button-hover-text"
            >
              Das Team
            </Link>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden border border-primary/30">
            <Image src="/hero-bg.jpg" alt="Golden geometric pattern" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-heading mb-2">Präzision & Innovation</h3>
                <p className="text-card-text">Unsere Technologie definiert neue Standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
