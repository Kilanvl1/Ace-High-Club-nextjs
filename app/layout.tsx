import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-heading",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} text-dark antialiased`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
