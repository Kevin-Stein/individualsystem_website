interface ServicesSectionProps {
  theme: string;
}

export default function ServicesSection({ theme }: ServicesSectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-black" : "bg-white"}`} />
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-heading mb-8">Unsere Dienstleistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-lg border border-primary/30 ${theme === "dark" ? "bg-black" : "bg-card"}`}>
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
            <h3 className="text-2xl font-bold text-heading mb-2">Ingenieurdienstleistung</h3>
            <p className={`text-card-text ${theme === "dark" ? "text-white" : ""}`}>
              Wir bieten umfassende Ingenieurdienstleistungen für die Entwicklung und Optimierung von technischen
              Systemen.
            </p>
          </div>
          <div className={`p-6 rounded-lg border border-primary/30 ${theme === "dark" ? "bg-black" : "bg-card"}`}>
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
            <h3 className="text-2xl font-bold text-heading mb-2">Projektmanagement</h3>
            <p className={`text-card-text ${theme === "dark" ? "text-white" : ""}`}>
              Professionelles Projektmanagement für die erfolgreiche Umsetzung komplexer technischer Projekte.
            </p>
          </div>
          <div className={`p-6 rounded-lg border border-primary/30 ${theme === "dark" ? "bg-black" : "bg-card"}`}>
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
            <h3 className="text-2xl font-bold text-heading mb-2">Technische Beratung</h3>
            <p className={`text-card-text ${theme === "dark" ? "text-white" : ""}`}>
              Fachkundige Beratung für technische Herausforderungen und innovative Lösungsansätze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
