import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  theme: string;
}

export default function HeroSection({ theme }: HeroSectionProps) {
  return (
    <section className="relative h-[600px] md:h-[800px] overflow-hidden w-full">
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-black" : "bg-white"}`} />
      <Image
        src={theme === "dark" ? "/hero-bg.jpg" : "/hero-bg-white.jpg"}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-center px-4">
        <div className="w-full max-w-[1200px] mx-auto text-center">
          <Image
            src={theme === "dark" ? "/logo-white.svg" : "/logo-black.svg"}
            alt="Logo"
            width={600}
            height={600}
            className="mx-auto mb-8"
          />
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Innovative Lösungen für Ihre technischen Herausforderungen
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 md:mb-12">
            Ihr Partner für innovative Lösungen in der Technologiebranche
          </p>
          <Link
            href="/about"
            className={`inline-flex items-center justify-center rounded-md px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium transition-colors ${
              theme === "dark"
                ? "bg-button text-button-text border border-button-border hover:bg-button-hover hover:text-button-hover-text"
                : "bg-white text-primary border border-primary hover:bg-primary/10"
            }`}
          >
            Mehr erfahren
          </Link>
        </div>
      </div>
    </section>
  );
}
