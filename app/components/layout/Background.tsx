import Image from "next/image";

interface BackgroundProps {
  theme: string;
}

export default function Background({ theme }: BackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={theme === "dark" ? "/hero-bg.jpg" : "/hero-bg-white.jpg"}
        alt="Hero background pattern"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white to-transparent dark:from-black"></div>
    </div>
  );
}
