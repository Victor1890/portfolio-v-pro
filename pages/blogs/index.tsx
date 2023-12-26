import BlogPage from '@components/pages/blogs'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'

const Blogs = ({ blogs }: { blogs: IArticleDevTo[] }) => <BlogPage blogs={blogs} />

export default Blogs

export async function getStaticProps() {
	const blogs = await devToProvider.getPageOfPosts().catch(() => null)
	return {
		props: { blogs: blogs || [] },
	}
}
