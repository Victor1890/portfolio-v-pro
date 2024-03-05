import { serialize } from 'next-mdx-remote/serialize'
import { visit } from 'unist-util-visit'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import { PRETTY_CODE_OPTIONS } from '@constants/mdx'

export const getMDXTableOfContents = (markdown: string) => {
	const regXHeader = /#{2,6}.+/g
	const headingArray = markdown.match(regXHeader) ? markdown.match(regXHeader) : []
	return headingArray?.map((heading, index) => {
		return {
			level: heading.split('#').length - 1 - 2, // we starts from the 2nd heading that's why we subtract 2 and 1 is extra heading text
			id: `heading-${index + 1}`, // we starts from the 2nd heading that's why we add 1 and 1 is extra heading text
			heading: heading
				.replace(/#{2,6}/, '')
				.replace(/\*\*/g, '')
				.trim(),
		}
	})
}

export async function getMarkdownSource(content: string) {
	const source = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				() => (tree) => {
					visit(tree, (node) => {
						if (node?.type === 'element' && node?.tagName === 'pre') {
							const [codeEl] = node.children
							if (codeEl?.tagName === 'code') {
								node.raw = codeEl.children[0].value
							}
						}
					})
				},
				rehypeSlug,
				[rehypeAutolinkHeadings, { behaviour: 'wrap' }],
				[rehypePrettyCode as any, PRETTY_CODE_OPTIONS],
			],
		},
	})
	return source
}
