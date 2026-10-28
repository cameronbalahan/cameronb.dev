import "./global.css";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Roboto_Mono } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../utils/config";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { cx } from "../utils/formatters";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        alt: SITE_NAME,
        height: 630,
        width: 1200,
        url: "/opengraph-image.jpg",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: SITE_NAME,
    card: "summary_large_image",
    images: ["/opengraph-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
};

const roboto = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cx([roboto.className, "text-white bg-[#111010]"])}
    >
      <body className="antialiased min-h-dvh flex items-center justify-center">
        <div className="relative flex flex-col w-full max-w-2xl h-dvh max-h-[1000px] px-6 lg:px-0">
          <Nav />
          <main className="flex-1 min-h-0 overflow-y-auto pt-36">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
