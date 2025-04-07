"use client";

import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Background from "./components/layout/Background";
import HeroSection from "./components/sections/HeroSection";
import CompanySection from "./components/sections/CompanySection";
import ServicesSection from "./components/sections/ServicesSection";
import Footer from "./components/layout/Footer";

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
      <Background theme={theme} />
      <Header theme={theme} onThemeChange={toggleTheme} />
      <main className="flex-grow">
        <HeroSection theme={theme} />
        <CompanySection theme={theme} />
        <ServicesSection theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}
