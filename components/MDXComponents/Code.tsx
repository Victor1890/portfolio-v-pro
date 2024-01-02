// import Prism from 'prismjs'
import { Fragment, ReactNode } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import oneDarkStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark'

interface ICodeProps {
	children: ReactNode | string | string[]
}

export default function Code({ children }: ICodeProps) {
	return (
		<Fragment>
			{typeof children === 'string' || Array.isArray(children) ? (
				<SyntaxHighlighter language='typescript' style={oneDarkStyle}>
					{children}
				</SyntaxHighlighter>
			) : (
				children
			)}
		</Fragment>
	)
}
