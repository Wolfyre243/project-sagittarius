import { SystemConfig } from '@/config/system.config';
import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SystemConfig.PUBLIC_BASE_URL;
  const routes = ['', '/projects']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8, // Give priority to root route
  }));
}