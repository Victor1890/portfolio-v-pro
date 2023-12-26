import { ITableOfContentMDX } from '@interfaces/common/common.interface'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'
import PageNotFoundPage from '../404'
import MetaData from '@components/app/meta/MetaData'
import BlogLayout from '@layout/BlogLayout'
import { MDXRemote } from 'next-mdx-remote'
import MDXComponents from '@components/MDXComponents'
import { Fragment } from 'react'

interface BlogPostPageProps {
	post: IArticleDevTo & { content: any; tableOfContents: ITableOfContentMDX[] }
	error: boolean
}

const BlogPostPage = ({ post, error }: BlogPostPageProps) => {
	if (!post || error) return <PageNotFoundPage />

	return (
		<Fragment>
			<MetaData
				title={post.title}
				suffix='Victor Rosario'
				description={post.description}
				previewImage={post.cover_image}
				keywords={post.tags ?? ''}
			/>

			<BlogLayout post={post}>
				<MDXRemote
					{...(post.content as any)}
					frontmatter={{
						slug: post.slug,
						excerpt: post.description,
						title: post.title,
						date: post.published_at,
						keywords: post.tags ?? '',
						image: post.cover_image,
					}}
					components={MDXComponents}
				/>
			</BlogLayout>
		</Fragment>
	)
}

export default BlogPostPage