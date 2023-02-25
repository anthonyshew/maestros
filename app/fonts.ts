import { Fira_Code } from "next/font/google";
import localFont from 'next/font/local'

export const rubik = localFont({
  src: "../public/fonts/Rubik/Rubik.ttf",
  variable: "--font-rubik",
});

export const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});
