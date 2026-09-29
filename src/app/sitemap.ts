import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/utils/site';
import { blogPosts } from './blog/data';

const pages: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/about-us', priority: 0.8 },
  { path: '/contact-us', priority: 0.8 },
  { path: '/faqs', priority: 0.7 },
  { path: '/help-and-support', priority: 0.7 },
  { path: '/blog', priority: 0.7 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms-and-conditions', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      priority,
    })),
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.6,
    })),
  ];
}
