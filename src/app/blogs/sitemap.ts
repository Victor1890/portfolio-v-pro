import config from '@config'
import devToProvider from '@provider/dev.to/devto.provider'
import { MetadataRoute } from 'next'

const { appUrl } = config

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const data = await devToProvider.getPageOfPosts().catch(() => null)
	if (!data) {
		return [
			{
				url: appUrl,
				lastModified: new Date(),
				changeFrequency: 'yearly',
				priority: 1,
			},
		]
	}

	return data.map(({ slug, published_at }) => ({
		url: `${appUrl}/blogs/${slug}`,
		lastModified: new Date(published_at),
		changeFrequency: 'monthly',
		priority: 0.8,
	}))
}
