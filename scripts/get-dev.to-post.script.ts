import dotenv from 'dotenv'
const dot = dotenv.config({
	path: '.env.local',
})

import fs from 'fs'
import path from 'path'

const config = {
	devTo: {
		username: dot.parsed?.NEXT_PUBLIC_DEVTO_USERNAME as string,
		api: dot.parsed?.NEXT_PUBLIC_DEVTO_API as string,
		apiKey: dot.parsed?.NEXT_PUBLIC_DEVTO_API_KEY as string,
	},
}

fetch(`${config.devTo.api}/articles/me?per_page=${1000}&page=${1}`, {
	headers: {
		'api-key': config.devTo.apiKey,
	},
})
	.then((data) => data.json())
	.then(async (posts) => {
		const filename = path.join(__dirname, '../', 'content/data/dev.to-posts.json')

		fs.writeFile(filename, JSON.stringify(posts, null, 2), (e) => {
			if (e) {
				console.error('Error writing file', e)
				return process.exit(1)
			}
			console.log('🔥 File written')

			return process.exit(0)
		})
	})
