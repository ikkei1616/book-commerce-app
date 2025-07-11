import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

import { Noto_Sans_JP } from "next/font/google";





const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sana-jp",
  subsets:["latin"],
  weight:["400"],
})


export const metadata: Metadata = {
  title: "Book-commerce-app",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
