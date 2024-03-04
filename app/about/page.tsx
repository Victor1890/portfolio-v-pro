'use client'

// import MDXContent from '@lib/MDXContent'
// import AboutPage from '@components/pages/about'
// import { IStaticInfo } from 'interfaces/about/about.interface'
// import PageNotFoundPage from '@components/pages/404'

// export async function getAboutMeInfo() {
// 	const data = await new MDXContent('static_pages').getPostFromSlug('about').catch((err) => {
// 		console.error("MDXContent('static_pages').getPostFromSlug('about') error: ", err)
// 		return null
// 	})

// 	if (!data) return null

// 	const aboutData = data.post

// 	const about: IStaticInfo = {
// 		slug: aboutData?.meta?.slug || '',
// 		title: aboutData?.meta?.title || '',
// 		keywords: aboutData?.meta?.keywords || '',
// 		published_at: aboutData?.meta?.date || '',
// 		content: aboutData?.source as any,
// 		excerpt: aboutData?.meta?.excerpt || '',
// 		cover_image: aboutData?.meta?.image || '',
// 	}

// 	return about
// }

// eslint-disable-next-line @next/next/no-async-client-component
const About = async () => {
	// const about = await getAboutMeInfo()

	// if (!about) return <PageNotFoundPage />

	// return <AboutPage about={about} />
	return <h1>TEST</h1>
}

export default About
