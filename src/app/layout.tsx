import type { Metadata } from "next";
import "@/app/globals.scss";
import Header from "@/app/components/section/header/Header";
import Footer from "@/app/components/section/footer/Footer";

export const metadata: Metadata = {
  description: "Ihre Experten für Reparaturen und Service in der Region.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <title>Meier Technik Gmbh | Ihre Experten für Reparaturen und Service in der Region.</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
