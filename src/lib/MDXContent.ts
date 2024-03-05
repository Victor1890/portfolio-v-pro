import { FrontMatter } from '@interfaces/common/common.interface'
import { getMDXTableOfContents, getMarkdownSource } from '@utils/mdx.util'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readTime from 'reading-time'

export default class MDXContent {
	private readonly POST_PATH: string

	constructor(folderName: string) {
		this.POST_PATH = path.join(process.cwd(), 'src', 'content', 'md', folderName)
	}

	getFrontMatter(slug: string): FrontMatter | null {
		const postPath = path.join(this.POST_PATH, `${slug}.mdx`)
		const source = readFileSync(postPath)
		const { content, data } = matter(source)
		const readingTime = readTime(content)

		if (!data.published) return null

		return {
			slug,
			readingTime,
			excerpt: data.excerpt ?? '',
			title: data.title ?? slug,
			date: (data.date ?? new Date()).toString(),
			keywords: data.keywords ?? '',
			image: data.image ?? 'https://imgur.com/aNqa9cE.png',
			org: data.org ?? null,
		}
	}

	async getPostFromSlug(slug: string, force: boolean = false) {
		const postPath = path.join(this.POST_PATH, `${slug}.mdx`)
		const source = readFileSync(postPath)
		const { content, data } = matter(source)
		if (!data.published && !force) return { post: null }

		const frontMatter = this.getFrontMatter(slug)

		const mdxSource = await getMarkdownSource(content)

		return {
			post: {
				source: mdxSource,
				tableOfContents: getMDXTableOfContents(content),
				meta: frontMatter,
			},
		}
	}
}
