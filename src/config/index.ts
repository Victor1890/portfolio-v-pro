const config = {
	personName: 'Victor Jesús Rosario Vásquez',
	// appUrl: process.env.NEXT_PUBLIC_SITE_URL as string,
	appUrl: process.env.NEXT_PUBLIC_VERCEL_URL as string,
	implementations: {
		emailSdk: {
			personName: 'Victor Rosario (Victor1890)',
			serviceId: process.env.EMAILJS_YOUR_SERVICE_ID as string,
			templateId: process.env.EMAILJS_YOUR_TEMPLATE_ID as string,
			userId: process.env.EMAILJS_YOUR_USER_ID as string,
		},
	},
	devTo: {
		username: process.env.NEXT_PUBLIC_DEVTO_USERNAME as string,
		api: process.env.NEXT_PUBLIC_DEVTO_API as string,
		apiKey: process.env.NEXT_PUBLIC_DEVTO_API_KEY as string,
	},
	github: {
		key: process.env.GITHUB_TOKEN as string,
		api: process.env.NEXT_PUBLIC_GITHUB_API as string,
		username: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
	},
	spotify: {
		api: process.env.SPOTIFY_API as string,
		apiToken: process.env.SPOTIFY_API_TOKEN as string,
		clientId: process.env.SPOTIFY_CLIENT_ID as string,
		clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
		refreshToken: process.env.SPOTIFY_REFRESH_TOKEN as string,
	},
}

console.log('config: ', config)

export default config
