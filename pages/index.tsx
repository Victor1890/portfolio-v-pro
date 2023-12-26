import HomePage from '@components/pages/home'
// import getRSS from '@lib/generateRSS'
// import generateSitemap from '@lib/sitemap'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'

const Home = ({ blogs }: { blogs: IArticleDevTo[] }) => <HomePage blogs={blogs} />

export default Home

export async function getStaticProps() {
	const blogs = await devToProvider.getPageOfPosts(1, 3).catch(() => null)

	// await getRSS()
	// await generateSitemap()

	return {
		props: { blogs },
	}
}
