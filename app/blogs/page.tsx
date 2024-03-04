import BlogPage from '@components/pages/blogs'
import { IArticle } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'

async function getAllArticle(): Promise<IArticle[]> {
	const data = await devToProvider.getPageOfPosts().catch(() => null)
	if (!data) return []

	const blogs = data.map((blog) => ({
		title: blog.title,
		slug: blog.slug,
		description: blog.description,
		cover_image: blog.cover_image,
		published_at: blog.published_at,
		user: blog.user,
		reading_time_minutes: blog.reading_time_minutes,
		tags: blog.tag_list || [],
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

const Blogs = async () => {
	const blogs = await getAllArticle()

	return <BlogPage blogs={blogs} />
}

export default Blogs
