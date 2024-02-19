const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const bundleAnalyzer = withBundleAnalyzer({
	output: 'standalone',
	reactStrictMode: true,
	swcMinify: false,
	transpilePackages: ['react-syntax-highlighter'],
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
			'media.dev.to',
		],
	},
	typescript: {
		ignoreBuildErrors: false,
	},
})

module.exports = bundleAnalyzer
