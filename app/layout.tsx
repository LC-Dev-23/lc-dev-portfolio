import type { Metadata } from "next";
import { monstserrat, roboto, raleway } from "../components/fonts"
import '../styles/globals.css'
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: {
    default: 'LC Dev’s Portfolio',
    template: 'LC Dev’s Portfolio | %s',
  },
  keywords: ["Web Development", "Front-End Developer", "TypeScript", "React", "Next.js", "Tailwind CSS", "WordPress", "Elementor", "Mobile Development", "API Integration", "Responsive Design"],
  authors: { name: 'Lord Christian Agra' },
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  creator: 'Lord Christian Agra',
  publisher: 'Lord Christian Agra',
  description: 'Explore the portfolio of LC Dev, a skilled web developer with 2 years of experience in crafting responsive, user-friendly websites. Discover his tech arsenal, areas of expertise, and projects.',
  metadataBase: new URL('https://www.lc-dev.site/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-PH': '/en-PH',
      'tl-PH': '/tl-PH'
    },
  },
  openGraph: {
    title: 'Lord Christian L. Agra - Showcasing Front-End & Web Development Mastery',
    description: 'Explore the portfolio of LC Dev, a skilled web developer with 2 years of experience in crafting responsive, user-friendly websites. Discover his tech arsenal, areas of expertise, and projects.',
    url: 'https://www.lc-dev.site/',
    siteName: 'LC Dev’s Portfolio',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1000,
        height: 1083,
        alt: 'Picture of LC Dev',
      },
    ],
    locale: 'en_PH',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${monstserrat.className} ${roboto.className} ${raleway.className}`} suppressHydrationWarning>

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
