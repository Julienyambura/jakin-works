import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Zilla_Slab } from "next/font/google";
import "./globals.css";

const display = Zilla_Slab({
  variable: "--font-display-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Jakin Works Ltd | Bespoke Architectural Fabrication in Nairobi",
  description:
    "Jakin Works Ltd is a Nairobi-based architectural fabrication company specialising in bespoke mild steel, stainless steel and aluminium fabrication.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Jakin Works Ltd",
    description: "Precision craftsmanship for exceptional spaces.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
