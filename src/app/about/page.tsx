import MDXContent from '@lib/MDXContent'
// import AboutPage from '@components/pages/about'
import { IStaticInfo } from '@interfaces/about/about.interface'
// import PageNotFoundPage from '@components/pages/404'

async function getAboutMeInfo(): Promise<IStaticInfo | null> {
	const data = await new MDXContent('static_pages').getPostFromSlug('about').catch((err) => {
		console.error("MDXContent('static_pages').getPostFromSlug('about') error: ", err)
		return null
	})

	if (!data) return null

	const aboutData = data.post

	console.log('aboutData: ', aboutData)

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
	// return null
}

export default async function Page() {
	const about = await getAboutMeInfo()
	console.log('about: ', about)
	// if (!about) return <PageNotFoundPage />

	// return <AboutPage about={about} />;
	return <p>T</p>
}
