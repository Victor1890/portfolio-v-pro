import BlogPage from '@components/pages/blogs'
import { IArticle } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'
import config from '@config'
import { metadata as meta } from '@content/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	metadataBase: new URL(`${config.appUrl}`),
	title: meta.blogs.title,
	description: meta.blogs.description,
	keywords: meta.blogs.keywords,
	authors: {
		name: config.personName,
	},
	creator: config.personName,
	generator: 'Next.js',
	alternates: {
		canonical: config.appUrl,
	},
	robots: 'index, follow',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: `${config.appUrl}/blogs`,
		title: meta.blogs.title,
		description: meta.blogs.description,
		siteName: `Portfolio | ${config.personName}`,
		images: [
			{
				url: `${config.appUrl}/open-graph/og.png`,
				alt: meta.blogs.title,
			},
		],
	},
	icons: {
		icon: '/favicon-light.ico',
		shortcut: '/favicon-light.ico',
		apple: '/apple-touch-icon.ico',
	},
}

const Blogs = async () => {
	const blogs = await getAllArticle()
	return <BlogPage blogs={blogs} />
}

async function getAllArticle(): Promise<IArticle[]> {
	const data = await devToProvider.getPageOfPosts().catch(() => null)
	if (!data) return []

	const blogs = data.map((blog) => ({
		title: blog.title,
		slug: blog.slug,
		description: blog.description,
		cover_image: blog.cover_image,
		published_at: blog.published_at,
		user: blog.user,
		reading_time_minutes: blog.reading_time_minutes,
		tags: blog.tag_list || [],
		readingTime: {
			text: blog.reading_time_minutes.toString(),
			minutes: blog.reading_time_minutes,
			time: blog.reading_time_minutes,
			words: 0,
			language: 'en',
		},
	}))

	return blogs
}

export default Blogs
