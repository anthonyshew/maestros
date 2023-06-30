import { Fira_Code } from "next/font/google";
import localFont from 'next/font/local'

export const inter = localFont({
  src: "../public/fonts/inter.ttf",
  variable: "--font-inter",
});

export const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});
