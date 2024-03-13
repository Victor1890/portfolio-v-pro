import { SIZE } from '@constants/og.constant'
import { User } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'
import { ImageResponse } from 'next/og'
import readTime, { ReadTimeResults } from 'reading-time'

interface BlogPageProps {
	params: {
		slug: string
	}
}

interface IArticleOG {
	cover_image: string
	title: string
	readingTime: ReadTimeResults
	user: User
	published_at: string
}

export default async function og({ params }: BlogPageProps) {
	const blog = await getBlogBySlug(params.slug)

	if (!blog) {
		return new Response('Not Found', { status: 404 })
	}

	const { title, cover_image, readingTime, user, published_at } = blog

	return new ImageResponse(
		(
			<div tw='relative flex w-full h-full flex items-center justify-center'>
				{/* Background */}
				<div tw='absolute flex inset-0'>
					<img tw='flex flex-1' src={cover_image} alt={title} />
					{/* Overlay */}
					<div tw='absolute flex inset-0 bg-black bg-opacity-50' />
				</div>
				<div tw='flex flex-col text-neutral-50'>
					{/* Title */}
					<div tw='text-7xl font-bold'>{title}</div>
					{/* Tags */}
					<div tw='flex mt-6 flex-wrap items-center text-4xl text-neutral-200'>
						{/* <div
                  tw={`font-medium ${
                    post?.category.title === "Cities"
                      ? "text-emerald-600"
                      : "text-indigo-600"
                  }`}
                >
                  {post?.category.title}
                </div> */}
						<div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300 ' />
						<div>{user.name}</div>
						<div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
						<div>{readingTime.text}</div>
						<div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
						<div>{new Date(published_at).toDateString()}</div>
					</div>
				</div>
			</div>
		),
		{
			...SIZE,
		}
	)
}

async function getBlogBySlug(slug: string): Promise<IArticleOG | null> {
	const post = await devToProvider.getArticleBySlug(slug).catch(() => null)
	if (!post) return null

	const mdxContent = post.body_markdown as string
	const readingTime = readTime(mdxContent)

	const payload: IArticleOG = {
		title: post.title,
		cover_image: post.cover_image,
		readingTime,
		published_at: post.published_at,
		user: post.user,
	}

	return payload
}
