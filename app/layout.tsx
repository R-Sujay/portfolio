import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";
import { Children } from "@/typings";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Sujay Rajesh",
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default async function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
          <Toaster />
          <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
