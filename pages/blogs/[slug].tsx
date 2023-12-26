import BlogPostPage from '@components/pages/blogs/slug'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'
import { getMDXTableOfContents } from '@utils/mdx.util'
import { ITableOfContentMDX } from 'interfaces/common/common.interface'
import { GetStaticPropsContext } from 'next'
import { serialize } from 'next-mdx-remote/serialize'

type StaticProps = GetStaticPropsContext & {
	params: {
		slug: string
	}
}

const PostPage = ({ post, error }: {
	post: IArticleDevTo & { content: any; tableOfContents: ITableOfContentMDX[] }
	error: boolean
}) => <BlogPostPage error={error} post={post} />

export default PostPage

export async function getStaticProps({ params }: StaticProps) {
	const { slug } = params
	const post = await devToProvider.getArticleBySlug(slug)

	if (!post) {
		return { props: { error: true, post: null } }
	}

	const mdxContent = post.body_markdown as string
	const content = await serialize(mdxContent)
	const tableOfContents = getMDXTableOfContents(mdxContent)

	return {
		props: {
			error: false,
			post: { ...post, content, tableOfContents },
		},
	}
}

export async function getStaticPaths() {
	const posts = await devToProvider.getPageOfPosts()
	const paths = posts.map(({ slug }) => ({ params: { slug } }))

	return {
		paths,
		fallback: false,
	}
}
