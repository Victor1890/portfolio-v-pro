/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	sitemapSize: 7000,
	robotsTxtOptions: {
		// additionalSitemaps: [`${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`],
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
			},
			{
				userAgent: 'Bingbot',
				allow: '/',
			},
			{
				userAgent: 'Slurp',
				allow: '/',
			},
			{
				userAgent: 'DuckDuckBot',
				allow: '/',
			},
			{
				userAgent: 'Baiduspider',
				allow: '/',
			},
			{
				userAgent: 'YandexBot',
				allow: '/',
			},
			{
				userAgent: 'Sogou',
				allow: '/',
			},
			{
				userAgent: 'facebot',
				allow: '/',
			},
			{
				userAgent: 'ia_archiver',
				allow: '/',
			},
		],
	},
}
