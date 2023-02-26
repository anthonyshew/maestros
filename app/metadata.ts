import { Metadata } from "next";
import { tagline } from "#/app/constants";

const baseMetadata =
{
  title: {
    default: 'Anthony Shew',
    template: '%s | Anthony Shew',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: tagline,
  openGraph: {
    title: 'Anthony Shew',
    description: tagline,
    url: 'https://shew.dev/images/me.png',
    siteName: 'Anthony Shew',
    images: [
      {
        url: 'https://shew.dev/images/me.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'Anthony Shew',
    card: 'summary_large_image',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

interface BuildMetaParams {
  title: string,
  description?: string
}

export const buildMeta = async ({ title, description }: BuildMetaParams): Promise<Metadata> => {
  const customMeta = baseMetadata

  customMeta.openGraph.images = [
    {
      url: encodeURI(`https://${process.env.VERCEL_URL}/api/og?title=${title ?? "Anthony Shew"}`),
      width: 1920,
      height: 1080,
    }
  ]

  if (description) {
    customMeta.description = description
  }

  return { ...customMeta, title }
}

export default baseMetadata