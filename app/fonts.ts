import { Fira_Code, } from "next/font/google";
import localFont from 'next/font/local'

export const rubik = localFont({
  src: "../public/fonts/Rubik/Rubik.ttf",
  variable: "--font-rubik",
  display: "optional",
});

export const firaCode = Fira_Code({
  variable: "--font-fira-code",
  display: "optional",
  subsets: ["latin"],
});
