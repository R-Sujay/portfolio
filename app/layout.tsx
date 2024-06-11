import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";
import { Children } from "@/typings";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Sujay Rajesh",
  description:
    "I am a 9th-grade student looking to gain practical experience in software development. I am willing to work for free to achieve this goal. I am ready and fluent in industry-leading technologies and frameworks",
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default async function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <div>
          <Toaster />
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
