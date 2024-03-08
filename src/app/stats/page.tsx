import StatPage from '@components/pages/stats'
import config from '@config'
import { metadata as meta } from '@content/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	metadataBase: new URL(`${config.appUrl}`),
	title: meta.stats.title,
	description: meta.stats.description,
	keywords: meta.stats.keywords,
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
		url: `${config.appUrl}/stats`,
		title: meta.stats.title,
		description: meta.stats.description,
		siteName: `Portfolio | ${config.personName}`,
		images: [
			{
				url: `${config.appUrl}/open-graph/og.png`,
				alt: meta.stats.title,
			},
		],
	},
	icons: {
		icon: '/favicon-light.ico',
		shortcut: '/favicon-light.ico',
		apple: '/apple-touch-icon.ico',
	},
}

const Stats = () => <StatPage />

export default Stats
