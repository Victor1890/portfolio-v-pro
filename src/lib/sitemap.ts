import { globby } from 'globby'
import { writeFileSync } from 'fs'
import config from '@config'
import devToJson from '@content/data/dev.to-posts.json'

const { appUrl } = config

export default async function generate() {
	const pages = await globby(['pages/*.tsx', '!pages/_*.tsx', '!pages/api', '!pages/404.tsx'])

	const postsSlugs = devToJson.map((item) => `/blogs/${item.slug}`)

	const pagesRoute = pages.map((page) => {
		const path = page.replace('pages', '').replace('.tsx', '')
		const route = path === '/index' ? '' : path
		return route
	})

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${[...pagesRoute, ...postsSlugs]
					.map((route) => {
						return `
              <url>
                  <loc>${`${appUrl}${route}`}</loc>
              </url>
            `
					})
					.join('')}
    </urlset>
    `

	writeFileSync('public/sitemap.xml', sitemap)
}
