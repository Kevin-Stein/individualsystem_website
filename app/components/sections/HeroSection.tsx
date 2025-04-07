import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  theme: string;
}

export default function HeroSection({ theme }: HeroSectionProps) {
  return (
    <section className="relative h-[600px] overflow-hidden pt-24">
      <Image
        src={theme === "dark" ? "/hero-bg.jpg" : "/hero-bg-white.jpg"}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          theme === "dark" ? "from-black via-black/50 to-transparent" : "from-white via-white/50 to-transparent"
        }`}
      />
      <div className="container relative flex h-full flex-col justify-center items-start">
        <Image
          src={theme === "dark" ? "/logo-white.svg" : "/logo-black.svg"}
          alt="Individual System Logo"
          width={400}
          height={100}
          className="mb-10 w-[350px] h-[90px] sm:w-[250px] sm:h-[60px] md:w-[400px] md:h-[100px]"
          priority
        />
        <p className="mb-10 text-xl md:text-2xl text-white">
          Ihr Partner für innovative Lösungen in der Technologiebranche
        </p>
        <Link
          href="/about"
          className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors ${
            theme === "dark"
              ? "bg-button text-button-text border border-button-border hover:bg-button-hover hover:text-button-hover-text"
              : "bg-white text-primary border border-primary hover:bg-primary/10"
          }`}
        >
          Über uns
        </Link>
      </div>
    </section>
  );
}
