import { CSSProperties, useEffect, useState } from 'react'
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter'

export default function Code({ children, language = 'typescript' }: SyntaxHighlighterProps) {
	const [styles, setStyles] = useState<{ [key: string]: CSSProperties } | undefined>(undefined)
	useEffect(() => {
		import('react-syntax-highlighter/dist/esm/styles/prism/one-dark').then((mod) => setStyles(mod.default))
	}, [])

	return (
		<SyntaxHighlighter language={language} style={styles}>
			{children}
		</SyntaxHighlighter>
	)
}
