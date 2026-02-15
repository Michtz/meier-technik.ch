import type { Metadata } from "next";
import "@/app/globals.scss";
import Header from "@/app/components/section/header/Header";
import Footer from "@/app/components/section/footer/Footer";

const baseUrl = "https://www.meier-technik.ch";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Meier Technik GmbH | Industrieanlagenservice & Maschinenbau",
    template: "%s | Meier Technik GmbH",
  },
  description:
    "Ihr Experte für Industrieanlagenservice, Verpackungsanlagen (Restelli, Fuji), Schweissarbeiten und Betriebsmechanik in der Schweiz.",
  keywords: [
    "Industriemechaniker",
    "Anlagenservice",
    "Verpackungsanlagen",
    "Schweissarbeiten",
    "Ventilrevision",
    "Hochdorf",
    "Migros Industrie",
    "Restelli",
    "Fuji",
  ],
  authors: [{ name: "Meier Technik GmbH" }],
  creator: "Meier Technik GmbH",
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: baseUrl,
    siteName: "Meier Technik GmbH",
    title: "Meier Technik GmbH | Präzision in Industrie & Mechanik",
    description: "Zuverlässiger Service für Verpackungsanlagen, Revisionen und Schweisstechnik.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Meier Technik GmbH im Einsatz",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Meier Technik GmbH",
  image: "https://www.meier-technik.ch/images/og-image.png",
  url: "https://www.meier-technik.ch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Guggibadstrasse 10",
    addressLocality: "Schongau",
    postalCode: "6288",
    addressCountry: "CH",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.267536,
    longitude: 8.275975,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:30",
    closes: "17:30",
  },
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <title>Meier Technik Gmbh | Ihre Experten für Reparaturen und Service in der Region.</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
