import "./globals.css";
import type { Metadata } from "next";
import { Figtree} from "next/font/google";

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Spotitunes",
  description: "Music listening app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
