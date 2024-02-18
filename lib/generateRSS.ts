import RSS from 'rss'
import { writeFileSync } from 'fs'
import config from '@config'
import devToJson from '@content/data/dev.to-posts.json'

const { appUrl: siteURL } = config

export default async function getRSS() {
	// Create a new RSS object
	const feed = new RSS({
		title: 'Victor Rosario',
		description: `I've been writing online since 2021, mostly about web development
            and tech careers. In total, I've written ${devToJson.length} articles
            till now.`,
		site_url: siteURL,
		feed_url: `${siteURL}/feed.xml`,
		language: 'en',
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}, Victor Rosario`,
	})

	// Add all blog posts to the RSS feed
	devToJson.forEach((post) => {
		const { slug, title, published_at, description } = post

		feed.item({
			title,
			url: `${siteURL}/blogs/${slug}`,
			date: published_at,
			description,
		})
	})

	// Write the RSS feed to a file
	writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}
