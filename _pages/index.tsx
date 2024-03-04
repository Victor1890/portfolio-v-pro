import HomePage from '@components/pages/home'
// import getRSS from '@lib/generateRSS'
// import generateSitemap from '@lib/sitemap'
import { IArticle } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'

const Home = ({ blogs }: { blogs: IArticle[] }) => <HomePage blogs={blogs} />

export default Home

export async function getStaticProps() {
	const data = await devToProvider.getPageOfPosts(1, 3).catch(() => null)

	if (!data) return { props: { blogs: [] } }
	// await getRSS()
	// await generateSitemap()

	const blogs = data.map((blog) => ({
		title: blog.title,
		slug: blog.slug,
		description: blog.description,
		cover_image: blog.cover_image,
		published_at: blog.published_at,
		user: blog.user,
		reading_time_minutes: blog.reading_time_minutes,
		...(blog?.tag_list && { tags: blog.tag_list }),
	}))

	return {
		props: { blogs },
	}
}
