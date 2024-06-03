import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";
import { Children } from "@/typings";
import { cookies } from "next/headers";
import { getTheme } from "./actions";

export const metadata: Metadata = {
  title: "Sujay Rajesh",
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default async function RootLayout({ children }: Children) {
  console.log(await getTheme());

  return (
    <html lang="en">
      <body className="dark">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
