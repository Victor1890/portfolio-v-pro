/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
	publicExcludes: ['!resume.pdf'],
})

const bundleAnalyzer = withBundleAnalyzer({
	reactStrictMode: true,
	swcMinify: false,
	images: {
		domains: [
			'ucarecdn.com',
			'cdn.buymeacoffee.com',
			'res.cloudinary.com',
			'imgur.com',
			'i.imgur.com',
			'cutt.ly',
			'activity-graph.herokuapp.com',
			'i.scdn.co',
			'images.unsplash.com',
			'm.media-amazon.com',
			'image.tmdb.org', // tmdb images,
			'media.licdn.com',
			'raw.githubusercontent.com',
		],
	},
	typescript: {
		ignoreBuildErrors: false,
	},
})


module.exports = withPWA(bundleAnalyzer)
