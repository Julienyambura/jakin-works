import type { Metadata } from "next";
import { IBM_Plex_Mono, Zilla_Slab } from "next/font/google";
import "./globals.css";

const zilla = Zilla_Slab({
  variable: "--font-zilla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${zilla.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
