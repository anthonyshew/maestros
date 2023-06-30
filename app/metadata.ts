import { Metadata } from "next";
import { tagline } from "#/app/constants";

const baseMetadata: Metadata =
{
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL(`http://localhost:${process.env.PORT ?? 3000}`),
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
    url: encodeURI(`https://${process.env.VERCEL_URL}/api/og?title=Anthony Shew`),
    siteName: 'Anthony Shew',
    images: [
      {
        url: encodeURI(`https://${process.env.VERCEL_URL}/api/og?title=Anthony Shew`),
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
    images: [
      {
        url: encodeURI(`https://${process.env.VERCEL_URL}/api/og?title=Anthony Shew`),
        width: 1920,
        height: 1080,
      },
    ],
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

interface BuildMetaParams {
  title: string,
  description?: string
  ogImage?: NonNullable<NonNullable<Metadata["openGraph"]>["images"]>
}

export const buildMeta = async ({ title, description, ogImage }: BuildMetaParams): Promise<Metadata> => {
  if (ogImage) {
    baseMetadata.openGraph!.images = ogImage
    baseMetadata.twitter!.images = ogImage
  }

  if (description) {
    baseMetadata.description = description
    baseMetadata.twitter!.description = description
    baseMetadata.openGraph!.description = description
  }

  if (title) {
    baseMetadata.title = title
    baseMetadata.twitter!.title = title
    baseMetadata.openGraph!.title = title
  }

  return baseMetadata
}

export default baseMetadata