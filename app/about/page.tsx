import MDXContent from '@lib/MDXContent'
import AboutPage from '@components/pages/about'
import { IStaticInfo } from 'interfaces/about/about.interface'

export async function getAboutMeInfo() {
	const { post: aboutData } = await new MDXContent('static_pages').getPostFromSlug('about')

	const about: IStaticInfo = {
		slug: aboutData?.meta?.slug || '',
		title: aboutData?.meta?.title || '',
		keywords: aboutData?.meta?.keywords || '',
		published_at: aboutData?.meta?.date || '',
		content: aboutData?.source as any,
		excerpt: aboutData?.meta?.excerpt || '',
		cover_image: aboutData?.meta?.image || '',
	}

	return about
}

const About = async () => {
	const about = await getAboutMeInfo()

	return <AboutPage about={about} />
}

export default About
