import type { Metadata } from "next";
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Sujay Rajesh",
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#13192d]">
        <Toaster />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
