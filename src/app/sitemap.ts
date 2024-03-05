import { MetadataRoute } from 'next'
import config from '@config'
import { navigationRoutes } from '@utils/utils'
import devToProvider from '@provider/dev.to/devto.provider'

const { appUrl } = config

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const sitemapCustom: MetadataRoute.Sitemap = [
		{
			url: `${appUrl}/blogs/sitemap.xml`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]

	const main: MetadataRoute.Sitemap = navigationRoutes.map((route) => {
		if (route === 'home') {
			return {
				url: appUrl,
				lastModified: new Date(),
				changeFrequency: 'yearly',
				priority: 1,
			}
		}

		return {
			url: `${appUrl}/${route}`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		}
	})

	const data = await devToProvider.getPageOfPosts().catch(() => null)
	if (!data) return main

	const posts: MetadataRoute.Sitemap = data.map(({ slug, published_at }) => ({
		url: `${appUrl}/blogs/${slug}`,
		lastModified: new Date(published_at),
		changeFrequency: 'monthly',
		priority: 0.8,
	}))

	return main.concat([...posts, ...sitemapCustom])
}
