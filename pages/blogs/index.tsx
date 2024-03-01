import BlogPage from '@components/pages/blogs'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'
// import devToProvider from '@provider/dev.to/devto.provider'
import devToJson from 'content/data/dev.to-posts.json'

const Blogs = ({ blogs }: { blogs: IArticleDevTo[] }) => <BlogPage blogs={blogs} />

export default Blogs

export async function getStaticProps() {
	// const blogs = await devToProvider.getPageOfPosts().catch(() => null)

	const blogs = Array.from(devToJson).map((blog) => ({
		title: blog.title,
		slug: blog.slug,
		description: blog.description,
		cover_image: blog.cover_image,
		published_at: blog.published_at,
		user: blog.user,
	}))

	return {
		props: { blogs: blogs || [] },
	}
}
