import BlogPage from '@components/pages/blogs'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'
// import devToProvider from '@provider/dev.to/devto.provider'
import devToJson from 'content/data/dev.to-posts.json'

const Blogs = ({ blogs }: { blogs: IArticleDevTo[] }) => <BlogPage blogs={blogs} />

export default Blogs

export async function getStaticProps() {
	// const blogs = await devToProvider.getPageOfPosts().catch(() => null)
	return {
		props: { blogs: devToJson || [] },
	}
}
