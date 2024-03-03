import MDXComponents from '@components/MDXComponents'
import MetaData from '@components/app/seo/MetaData'
import BlogLayout from '@components/layout/blog'
import { IArticle } from '@provider/dev.to/devto.interface'
import { MDXRemote } from 'next-mdx-remote'
import { Fragment } from 'react'
import PageNotFoundPage from '../404'

interface BlogPostPageProps {
	post: IArticle
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
