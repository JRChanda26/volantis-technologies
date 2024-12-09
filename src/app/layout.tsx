import type { Metadata } from "next";

import { Poppins } from 'next/font/google';
import "./globals.css";

// const poppinsFont = Poppins({ weight: '700', subsets: ['latin'], variable: '--font-poppins', });
const poppinsFont = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700'], 
});

export const metadata: Metadata = {
  title: "Volantis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={poppinsFont.className}
      >
        {children}
      </body>
    </html>
  );
}
