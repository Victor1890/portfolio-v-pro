import { Fragment, ReactNode } from 'react'

interface ICodeProps {
	children: ReactNode | string | string[]
}

export default function Code({ children }: ICodeProps) {
	return (
		<Fragment>
			{typeof children === "string" ? (
				<code className="!bg-gray-500 p-0.5 rounded before:text-gray-500 after:text-gray-500 text-white">
					{children}
				</code>
			) : (
				<code>{children}</code>
			)}
		</Fragment>
	)
}
