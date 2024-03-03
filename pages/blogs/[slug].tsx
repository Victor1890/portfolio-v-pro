import BlogPostPage from '@components/pages/blogs/slug'
import { IArticle } from '@provider/dev.to/devto.interface'
import { getMDXTableOfContents, getMarkdownSource } from '@utils/mdx.util'
// import devToJson from 'content/data/dev.to-posts.json'
import devToProvider from '@provider/dev.to/devto.provider'
import { GetStaticPropsContext } from 'next'
import readTime from 'reading-time'

type StaticProps = GetStaticPropsContext & {
	params: {
		slug: string
	}
}

const PostPage = ({ post, error }: { post: IArticle; error: boolean }) => <BlogPostPage error={error} post={post} />

export default PostPage

export async function getStaticProps({ params }: StaticProps) {
	const { slug } = params

	// const data = await devToProvider.getPageOfPosts().catch(() => null)
	// if(!data) return { props: { error: true, post: null } }

	const post = await devToProvider.getArticleBySlug(slug).catch(() => null)

	if (!post) {
		return { props: { error: true, post: null } }
	}

	const mdxContent = post.body_markdown as string
	const readingTime = readTime(mdxContent)
	const tableOfContents = getMDXTableOfContents(mdxContent)

	const content = await getMarkdownSource(mdxContent)

	const payload: IArticle = {
		title: post.title,
		slug: post.slug,
		description: post.description,
		cover_image: post.cover_image,
		tags: (post as any).tags || '',
		content,
		tableOfContents,
		readingTime,
		published_at: post.published_at,
		reading_time_minutes: post.reading_time_minutes,
		user: post.user,
	}

	return {
		props: {
			error: false,
			post: payload,
		},
	}
}

export async function getStaticPaths() {
	// const paths = devToJson.map(({ slug }) => ({ params: { slug } }))
	const data = await devToProvider.getPageOfPosts().catch(() => null)
	if (!data) return { paths: [], fallback: true }

	const paths = data.map(({ slug }) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}
