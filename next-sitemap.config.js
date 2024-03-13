const USER_AGENT = [
	'*',
	'Googlebot-Image',
	'Googlebot',
	'Bingbot',
	'Slurp',
	'DuckDuckBot',
	'Baiduspider',
	'YandexBot',
	'Sogou',
	'facebot',
	'ia_archiver',
	'Twitterbot',
	'WhatsApp',
	'Slackbot',
	'TelegramBot',
]

const navigationRoutes = ['home', 'about', 'stats', 'utilities', 'blogs', 'certificates', 'projects']

const config = {
	siteUrl: process.env.NEXT_PUBLIC_VERCEL_URL,
	devTo: {
		api: process.env.NEXT_PUBLIC_DEVTO_API,
		key: process.env.NEXT_PUBLIC_DEVTO_API_KEY,
		username: process.env.NEXT_PUBLIC_DEVTO_USERNAME,
	},
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: config.siteUrl,
	sitemapSize: 7000,
	generateRobotsTxt: true,
	generateIndexSitemap: false,
	exclude: ['/404', '/500', '/api/*'],
	robotsTxtOptions: {
		policies: USER_AGENT.map((agent) => ({
			userAgent: agent,
			allow: '/',
		})),
	},
	// additionalPaths: async () => {
	//     try {
	//         const result = []

	//         for (const route of navigationRoutes) {
	//             if (route === 'home') {
	//                 result.push({ loc: "/", lastmod: new Date().toISOString(), priority: 1, changefreq: 'daily' })
	//             } else {
	//                 result.push({ loc: route, lastmod: new Date().toISOString(), priority: 1, changefreq: 'daily' })
	//             }
	//         }

	//         const articles = await getDevToArticles(1000, 1)

	//         for (const article of articles) {
	//             result.push({
	//                 loc: `/blogs/${article.slug}`,
	//                 lastmod: new Date(article.published_at).toISOString(),
	//                 priority: 0.8,
	//                 changefreq: 'yearly'
	//             })
	//         }

	//         return result
	//     } catch (error) {
	//         return []
	//     }
	// }
}

async function getDevToArticles(perPage = 1, page = 1000) {
	const { api, key } = config.devTo
	const data = await fetch(`${api}/articles/me?per_page=${perPage}&page=${page}`, {
		headers: {
			api_key: key,
		},
	}).then((res) => res.json())
	return data
}
