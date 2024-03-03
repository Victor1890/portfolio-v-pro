export const PRETTY_CODE_OPTIONS = {
	// theme: {
	// 	dark: 'one-dark-pro',
	// 	light: 'github-light',
	// },
	theme: 'one-dark-pro',
	defaultLang: 'typescript',
	onVisitLine(node: any) {
		if (node?.children?.length === 0) {
			node.children = [{ type: 'text', value: ' ' }]
		}

		const isClassNameArray = Array.isArray(node?.properties?.className || '')
		if (isClassNameArray) {
			node.properties.className.push('line')
		} else {
			node.properties.className = ['line']
		}
	},
	onVisitHighlightedLine(node: any) {
		if (node?.properties?.className?.length) {
			node.properties.className.push('highlighted')
		}
	},
}
