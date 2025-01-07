import type { Metadata } from "next";
import { Aclonica } from "next/font/google";
import "./globals.css";
import "./custom_globals.css"
import Footer from "@/components/footer";

export const aclonica = Aclonica({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kingdoms of Myridia",
  description: "Designed and Developed by J. R. Masias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aclonica.className} antialiased bg-neutral-900`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
