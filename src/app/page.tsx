import type { Metadata } from 'next'
import config from '@config'
import HomePage from '@components/pages/home'
import { IArticle } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'
import { metadata as meta } from '@content/metadata'

export const metadata: Metadata = {
	title: meta.home.title,
	description: meta.home.description,
	keywords: meta.home.keywords,
	authors: {
		name: config.personName
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
		url: config.appUrl,
		title: meta.home.title,
		description: meta.home.description,
		siteName: `Portfolio | ${config.personName}`,
		images: [
			{
				url: `${config.appUrl}/open-graph/og.png`,
				alt: meta.home.title,
			},
		],
	},
	icons: {
		icon: "/favicon-dark.ico",
		shortcut: "/favicon-dark.ico",
		apple: "/apple-touch-icon.ico"
	}
}

const Home = async () => {
	const blogs = await getLastesBlogs()

	return <HomePage blogs={blogs} />
}

async function getLastesBlogs(): Promise<IArticle[]> {
	const data = await devToProvider.getPageOfPosts(1, 3).catch(() => null)

	if (!data) return []

	const blogs: IArticle[] = data.map((blog) => ({
		title: blog.title,
		slug: blog.slug,
		description: blog.description,
		cover_image: blog.cover_image,
		published_at: blog.published_at,
		user: blog.user,
		reading_time_minutes: blog.reading_time_minutes,
		tags: blog?.tag_list || [],
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

export default Home
