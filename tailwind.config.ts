import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        text: "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        heading: "hsl(var(--heading))",
        "hero-subtext": "hsl(var(--hero-subtext))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        "input-border": "hsl(var(--input-border))",
        "input-text": "hsl(var(--input-text))",
        card: "hsl(var(--card))",
        "card-border": "hsl(var(--card-border))",
        "card-overlay": "hsl(var(--card-overlay))",
        "card-text": "hsl(var(--card-text))",
        button: "hsl(var(--button))",
        "button-text": "hsl(var(--button-text))",
        "button-border": "hsl(var(--button-border))",
        "button-hover": "hsl(var(--button-hover))",
        "button-hover-text": "hsl(var(--button-hover-text))",
        header: "hsl(var(--header))",
        dropdown: "hsl(var(--dropdown))",
        "dropdown-text": "hsl(var(--dropdown-text))",
        "dropdown-hover": "hsl(var(--dropdown-hover))",
        section: "hsl(var(--section))",
        "section-alt": "hsl(var(--section-alt))",
        "section-overlay": "hsl(var(--section-overlay))",
        "section-overlay-alt": "hsl(var(--section-overlay-alt))",
        form: "hsl(var(--form))",
        "form-border": "hsl(var(--form-border))",
        label: "hsl(var(--label))",
        footer: "hsl(var(--footer))",
        "footer-overlay": "hsl(var(--footer-overlay))",
        "footer-text": "hsl(var(--footer-text))",
        "footer-copyright": "hsl(var(--footer-copyright))",
        cookie: "hsl(var(--cookie))",
        "cookie-text": "hsl(var(--cookie-text))",
        "hero-overlay": "hsl(var(--hero-overlay))",
        icon: "hsl(var(--icon))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

