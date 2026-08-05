import { SystemConfig } from '@/config/system.config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: SystemConfig.PUBLIC_BASE_URL + '/sitemap.xml',
  };
}