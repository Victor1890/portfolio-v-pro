import { CSSProperties, useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter'

export default function Code({ children }: SyntaxHighlighterProps) {
	const [styles, setStyles] = useState<{ [key: string]: CSSProperties } | undefined>(undefined)
	useEffect(() => {
		import('react-syntax-highlighter/dist/esm/styles/prism/one-dark').then((mod) => setStyles(mod.default))
	}, [])

	return (
		<SyntaxHighlighter language={'typescript'} style={styles}>
			{children}
		</SyntaxHighlighter>
	)
}
