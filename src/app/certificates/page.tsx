import CertificatePage from '@components/pages/certificates'
import config from '@config'
import { metadata as meta } from '@content/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	metadataBase: new URL(`${config.appUrl}`),
	title: meta.certificates.title,
	description: meta.certificates.description,
	keywords: meta.certificates.keywords,
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
		url: `${config.appUrl}/certificates`,
		title: meta.certificates.title,
		description: meta.certificates.description,
		siteName: `Portfolio | ${config.personName}`,
		images: [
			{
				url: `${config.appUrl}/open-graph/og.png`,
				alt: meta.certificates.title,
			},
		],
	},
	icons: {
		icon: '/favicon-light.ico',
		shortcut: '/favicon-light.ico',
		apple: '/apple-touch-icon.ico',
	},
}

const Certificates = () => <CertificatePage />

export default Certificates
