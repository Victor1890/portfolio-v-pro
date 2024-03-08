import PageNotFoundPage from '@components/pages/404'
import AboutPage from '@components/pages/about'
import { IStaticInfo } from '@interfaces/about/about.interface'
import MDXContent from '@lib/MDXContent'
import type { Metadata } from 'next'
import { metadata as meta } from '@content/metadata'
import config from '@config'

export const metadata: Metadata = {
	metadataBase: new URL(`${config.appUrl}`),
	title: meta.about.title,
	description: meta.about.description,
	keywords: meta.about.keywords,
	authors: {
		name: config.personName,
	},
	creator: config.personName,
	generator: 'Next.js',
	alternates: {
		canonical: config.appUrl,
	},
	robots: 'index, follow',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: `${config.appUrl}/about`,
		title: meta.about.title,
		description: meta.about.description,
		siteName: `Portfolio | ${config.personName}`,
		images: [
			{
				url: `${config.appUrl}/open-graph/og.png`,
				alt: meta.about.title,
			},
		],
	},
	icons: {
		icon: '/favicon-light.ico',
		shortcut: '/favicon-light.ico',
		apple: '/apple-touch-icon.ico',
	},
}

export default async function Page() {
	const about = await getAboutMeInfo()
	if (!about) return <PageNotFoundPage />

	return <AboutPage about={about} />
}

async function getAboutMeInfo(): Promise<IStaticInfo | null> {
	const data = await new MDXContent('static_pages').getPostFromSlug('about').catch((err) => {
		console.error("MDXContent('static_pages').getPostFromSlug('about') error: ", err)
		return null
	})
	if (!data) return null

	const aboutData = data.post

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
