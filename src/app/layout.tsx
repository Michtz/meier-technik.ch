import type { Metadata } from "next";
import "@/styles/globals.scss";
import Header from "@/app/components/section/Header";
import Footer from "@/app/components/section/footer/Footer";

export const metadata: Metadata = {
  title: "Meier Technik | Landmaschinen & Fahrzeugmechanik",
  description: "Ihre Experten für Reparaturen und Service in der Region.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>tesst
        <Footer/>
      </body>
    </html>
  );
}
