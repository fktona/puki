import type { Metadata } from "next";
import { Inter, Jolly_Lodger } from "next/font/google";
import "./globals.css";
import MenuProvider from "./context/MenuContext";
import ScrollProvider from "./context/scroll";

const JL = Jolly_Lodger({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "pukionsol",
  description: "the baddest bear on the block (chain)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      <body className={JL.className}>
        
        {children}
        </body>
    </html>
  );
}
