import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#09B2A0",
          foreground: "hsl(var(--primary-foreground))",
          light: "#6AE2D7",
          dark: "#078C80",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        patternFloatSlow: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(10px) translateX(5px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        patternFloatMedium: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-15px) translateX(-10px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        patternFloatFast: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(8px) translateX(-8px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 1s ease-out",
        fadeInUp: "fadeInUp 1s ease-out",
        "pattern-float-slow": "patternFloatSlow 20s ease-in-out infinite",
        "pattern-float-medium": "patternFloatMedium 15s ease-in-out infinite",
        "pattern-float-fast": "patternFloatFast 10s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Montserrat", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

