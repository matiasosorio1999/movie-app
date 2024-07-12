import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";

const inter = Montserrat({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <div className="lg:w-9/12 mx-auto sm:p-4 sm:mt-12">
        {children}
        </div>
      </body>
    </html>
  );
}
