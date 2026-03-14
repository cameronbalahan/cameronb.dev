import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./public/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config;
