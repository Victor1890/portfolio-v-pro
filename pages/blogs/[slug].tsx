import BlogPostPage from '@components/pages/blogs/slug'
import { IArticle } from '@provider/dev.to/devto.interface'
import { getMDXTableOfContents } from '@utils/mdx.util'
import devToJson from 'content/data/dev.to-posts.json'
import { GetStaticPropsContext } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
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

	const post = devToJson.find((post) => post.slug === slug)

	if (!post) {
		return { props: { error: true, post: null } }
	}

	const mdxContent = post.body_markdown as string
	const readingTime = readTime(mdxContent)
	const content = await serialize(mdxContent)
	const tableOfContents = getMDXTableOfContents(mdxContent)

	const data: IArticle = {
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
			post: data,
		},
	}
}

export async function getStaticPaths() {
	const paths = devToJson.map(({ slug }) => ({ params: { slug } }))
	return {
		paths,
		fallback: false,
	}
}
