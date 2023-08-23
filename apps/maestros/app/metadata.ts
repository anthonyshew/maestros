import type { Metadata } from 'next';
import { tagline } from '#/app/constants';

export const metadataBaseURI = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT ?? 3000}`;

const baseMetadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : new URL(`http://localhost:${process.env.PORT ?? 3000}`),
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
    siteName: 'Anthony Shew',
    images: [
      {
        url: encodeURI(`${metadataBaseURI}/api/og?title=Anthony Shew`),
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
        url: encodeURI(`${metadataBaseURI}/api/og?title=Anthony Shew`),
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
  title: string;
  description?: string;
  ogImage?: NonNullable<NonNullable<Metadata['openGraph']>['images']>;
}

export const buildMeta = ({
  title,
  description,
  ogImage,
}: BuildMetaParams): Metadata => {
  if (baseMetadata.openGraph) {
    if (ogImage) baseMetadata.openGraph.images = ogImage;
    if (description) baseMetadata.openGraph.images = description;
  }

  if (baseMetadata.twitter) {
    if (ogImage) baseMetadata.twitter.images = ogImage;
    if (description) baseMetadata.twitter.images = description;
    if (title) baseMetadata.twitter.title = title;
  }

  if (description) {
    baseMetadata.description = description;
  }

  if (title) {
    baseMetadata.title = title;
  }

  return baseMetadata;
};
