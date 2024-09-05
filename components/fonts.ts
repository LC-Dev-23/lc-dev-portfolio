import { Montserrat, Permanent_Marker, Nunito } from "next/font/google";

export const monstserrat = Montserrat({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monstserrat",
});

export const permanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-permanentMarker",
});

export const nunito = Nunito({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--nunito",
});
