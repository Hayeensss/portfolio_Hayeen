import localFont from "next/font/local";

// Load the Acorn font from the app/fonts directory
const acorn = localFont({
  src: [
    {
      path: "./fonts/acorn-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/acorn-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-acorn",
  display: "swap",
});

export { acorn };
