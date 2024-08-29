import type { Metadata } from "next";
import { monstserrat, roboto, raleway } from "../components/fonts"
import '../styles/globals.css'
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



export const metadata: Metadata = {
  title: "LC-Dev - Web Developer",
  description: "Explore the portfolio of LC Dev, a skilled Web developer with 2 years of experience in crafting responsive, user-friendly websites. Explore his tech stack, services, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monstserrat.className} ${roboto.className} ${raleway.className}`}  suppressHydrationWarning>

      <body className={"dark:bg-primaryBlack bg-primaryWhite"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
