interface ServicesSectionProps {
  theme: string;
}

export default function ServicesSection({ theme }: ServicesSectionProps) {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-black" : "bg-white"}`} />
      <div className="container relative z-10 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-heading mb-6 md:mb-8">Unsere Dienstleistungen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div
            className={`p-4 md:p-6 rounded-lg border border-primary/30 ${theme === "dark" ? "bg-black" : "bg-card"}`}
          >
            <div className="h-10 w-10 md:h-12 md:w-12 bg-primary rounded-full flex items-center justify-center mb-3 md:mb-4">
              <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-heading mb-2">Optische Messtechnik</h3>
            <p className={`text-sm md:text-base text-card-text ${theme === "dark" ? "text-white" : ""}`}>
              Präzise Messungen mit modernster Technologie
            </p>
          </div>
          <div
            className={`p-4 md:p-6 rounded-lg border border-primary/30 ${theme === "dark" ? "bg-black" : "bg-card"}`}
          >
            <div className="h-10 w-10 md:h-12 md:w-12 bg-primary rounded-full flex items-center justify-center mb-3 md:mb-4">
              <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-heading mb-2">Automatisierung</h3>
            <p className={`text-sm md:text-base text-card-text ${theme === "dark" ? "text-white" : ""}`}>
              Effiziente Lösungen für Ihre Produktion
            </p>
          </div>
          <div
            className={`p-4 md:p-6 rounded-lg border border-primary/30 ${theme === "dark" ? "bg-black" : "bg-card"}`}
          >
            <div className="h-10 w-10 md:h-12 md:w-12 bg-primary rounded-full flex items-center justify-center mb-3 md:mb-4">
              <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-heading mb-2">Sondermaschinen</h3>
            <p className={`text-sm md:text-base text-card-text ${theme === "dark" ? "text-white" : ""}`}>
              Individuelle Lösungen für Ihre Anforderungen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
