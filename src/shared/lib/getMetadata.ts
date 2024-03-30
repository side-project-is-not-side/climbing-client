import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';

import { META } from '../constants/metadata';

type GenerateMetadataProps = {
  title?: string;
  description?: string;
  asPath?: string;
  ogImage?: string;
};
export const getMetadata = (metadataProps?: GenerateMetadataProps) => {
  const { title, description, asPath, ogImage } = metadataProps || {};

  const TITLE = title ? `${title} | 그래버즈` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? asPath : '';
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        'naver-site-verification': META.naverVerification,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
