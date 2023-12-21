import { useEffect, useState, useMemo } from 'react';
import { NextSeo } from 'next-seo';
import useWindowLocation from '@hooks/useWindowLocation';
import config from '@config';

// import Head from "next/head";

type Props = {
  title: string;
  description: string;
  previewImage?: string;
  keywords?: string | string[];
  suffix?: string;
};

const getFaviconPath = (isDarkMode: boolean = true): string => {
  return `/favicon-${isDarkMode ? 'dark' : 'light'}.ico`;
};

export default function MetaData({
  title,
  description,
  previewImage,
  keywords,
  suffix,
}: Props) {
  const { currentURL } = useWindowLocation();
  const [faviconHref, setFaviconHref] = useState('/favicon-dark.ico');

  const tags = useMemo(() => {
    if (!keywords) return [];
    const isArray = Array.isArray(keywords);
    return isArray ? keywords : keywords.split(',');
  }, [keywords]);

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    setFaviconHref(getFaviconPath(matcher.matches));
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
  }, [faviconHref]);

  return (
    <NextSeo
      title={title + (suffix ? ` - ${suffix}` : '')}
      description={description || 'Victor Rosario'}
      canonical={currentURL}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: faviconHref,
        },
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/icon-192x192.png',
          sizes: '192x192',
        },
      ]}
      openGraph={{
        type: 'website',
        url: currentURL,
        title: title + (suffix ? ` - ${suffix}` : ''),
        description: description || 'Victor Rosario',
        profile: {
          firstName: 'Victor',
          lastName: 'Rosario',
          gender: 'Male',
          username: 'victor1890',
        },
        article: {
          tags,
          authors: [
            'https://www.linkedin.com/in/victor-j-rosario-v/?locale=en_US',
          ],
        },
        images: [
          {
            url: previewImage ?? '',
            width: 1200,
            height: 630,
            alt: title,
            type: 'image/jpeg',
          },
        ],
        // TODO: Change this
        siteName: config.appUrl,
      }}
      twitter={{
        handle: '@Victor_R1890',
        site: '@Victor_R1890',
        cardType: 'summary_large_image',
      }}
    />
  );
}
