import PageNotFoundPage from '@components/pages/404'
import BlogPostPage from '@components/pages/blogs/slug'
import { IArticle } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'
import { getMDXTableOfContents, getMarkdownSource } from '@utils/mdx.util'
import readTime from 'reading-time'

interface BlogPageProps {
	params: {
		slug: string
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
