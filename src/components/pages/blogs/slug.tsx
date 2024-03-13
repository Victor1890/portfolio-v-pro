'use client'

import MDXComponents from '@components/MDXComponents'
import BlogLayout from '@components/layout/blog'
import { IArticle } from '@provider/dev.to/devto.interface'
import { MDXRemote } from 'next-mdx-remote'
import { useMemo } from 'react'

interface BlogPostPageProps {
	post: IArticle
}

const BlogPostPage = ({ post }: BlogPostPageProps) => {
	const keywords = useMemo(() => {
		if (!post.tags) return ''

		const isTagArray = Array.isArray(post.tags)
		return isTagArray ? post.tags.join(',') : ''
	}, [post.tags])

	return (
		<BlogLayout post={post}>
			<MDXRemote
				{...(post.content as any)}
				frontmatter={{
					slug: post.slug,
					excerpt: post.description,
					title: post.title,
					date: post.published_at,
					keywords,
					image: post.cover_image,
				}}
				components={MDXComponents}
			/>
		</BlogLayout>
	)
}

export default BlogPostPage
