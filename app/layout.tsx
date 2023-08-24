import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Preahvihear} from "next/font/google";
import Navbar from "@/components/Navbar";

const preahvihear = Preahvihear({ subsets: ["latin"] , weight: ['400'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("bg-primary text-foreground", preahvihear.className)}>
        <Navbar />
        <main className="xl:px-80 lg:px-60 px-10 sm:px-16 md:px-32">
          {children}
        </main>
      </body>
    </html>
  );
}
