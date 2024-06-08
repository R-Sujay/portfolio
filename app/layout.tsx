import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";
import { Children } from "@/typings";
import { Toaster } from "react-hot-toast";
import Loading from "@/components/Loading";

export const metadata: Metadata = {
  title: "Sujay Rajesh",
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default async function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <div>
          <Toaster />
          <ThemeProvider>{children}</ThemeProvider>
        </div>
      </body>
    </html>
  );
}
