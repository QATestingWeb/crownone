import type { MetadataRoute } from 'next';

const BASE_URL = 'https://crownone.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/coming-soon',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
