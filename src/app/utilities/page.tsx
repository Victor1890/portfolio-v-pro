import UtilityPage from '@components/pages/utilities'

import type { Metadata } from 'next'
import { metadata as meta } from '@content/metadata'
import config from '@config'

export const metadata: Metadata = {
	metadataBase: new URL(`${config.appUrl}`),
	title: meta.utilities.title,
	description: meta.utilities.description,
	keywords: meta.utilities.keywords,
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
		url: `${config.appUrl}/utilities`,
		title: meta.utilities.title,
		description: meta.utilities.description,
		siteName: `Portfolio | ${config.personName}`,
		images: [
			{
				url: `${config.appUrl}/open-graph/og.png`,
				alt: meta.utilities.title,
			},
		],
	},
	icons: {
		icon: '/favicon-light.ico',
		shortcut: '/favicon-light.ico',
		apple: '/apple-touch-icon.ico',
	},
}

const Utilities = () => <UtilityPage />

export default Utilities
