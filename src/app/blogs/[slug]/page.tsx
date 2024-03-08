import PageNotFoundPage from '@components/pages/404'
import BlogPostPage from '@components/pages/blogs/slug'
import config from '@config'
import { DESCRIPTION, metadata as meta } from '@content/metadata'
import { IArticle } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'
import { getMDXTableOfContents, getMarkdownSource } from '@utils/mdx.util'
import { Metadata } from 'next'
import readTime from 'reading-time'

interface BlogPageProps {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
	const blog = await devToProvider.getArticleBySlug(params.slug).catch(() => null)
	if (!blog) {
		return {
			title: 'Page Not Found',
			authors: { name: 'Page Not Found', url: config.appUrl },
		}
	}

	const blogLink = `${config.appUrl}/blogs/${blog.slug}`

	const keywords = ['article', 'blog', 'portfolio', blog.title, blog.user.name, blog.slug]
		.concat(blog.tag_list || [])
		.join(', ')

	return {
		title: `${blog.title} | ${config.personName}`,
		authors: {
			name: blog.user.name,
			url: blogLink,
		},
		description: blog.description,
		category: ['blog', 'article'].concat(blog.tag_list).join(', '),
		alternates: {
			canonical: blogLink,
		},
		applicationName: 'Victor Jesús Rosario Vásquez | Portfolio | Blog',
		robots: 'index, follow',
		openGraph: {
			type: 'article',
			locale: 'en_US',
			url: blogLink,
			title: blog.title,
			description: blog.description,
			siteName: `Portfolio | ${config.personName}`,
			images: [
				{
					url: `${config.appUrl}/api/og?heading=${blog.title}&type=Article&mode=dark`,
					alt: blog.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			site: blogLink,
			creator: blog.user.name,
			description: blog.description,
			title: blog.title,
		},
		icons: {
			icon: '/favicon-light.ico',
			shortcut: '/favicon-light.ico',
			apple: '/apple-touch-icon.ico',
		},
		generator: 'Next.js',
		referrer: 'no-referrer-when-downgrade',
		abstract: DESCRIPTION,
		creator: blog.user.name,
		keywords: `${keywords},${meta.blogs.keywords}`,
	}
}

export async function generateStaticParams() {
	const data = await devToProvider.getPageOfPosts().catch(() => null)
	if (!data) return []

	const paths = data.map(({ slug }) => ({ slug }))

	return paths
}

async function getBlogBySlug(slug: string): Promise<IArticle | null> {
	const post = await devToProvider.getArticleBySlug(slug).catch(() => null)
	if (!post) return null

	const mdxContent = post.body_markdown as string
	const readingTime = readTime(mdxContent)
	const tableOfContents = getMDXTableOfContents(mdxContent)

	const content = await getMarkdownSource(mdxContent)

	const payload: IArticle = {
		title: post.title,
		slug: post.slug,
		description: post.description,
		cover_image: post.cover_image,
		tags: post.tag_list || [],
		content,
		tableOfContents,
		readingTime,
		published_at: post.published_at,
		reading_time_minutes: post.reading_time_minutes,
		user: post.user,
	}

	return payload
}

export default async function Page({ params }: BlogPageProps) {
	const post = await getBlogBySlug(params.slug)
	if (!post) return <PageNotFoundPage />

	return <BlogPostPage post={post} />
}
