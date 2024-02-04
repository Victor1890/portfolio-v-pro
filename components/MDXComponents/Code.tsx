import { Fragment, ReactNode } from 'react'

interface ICodeProps {
	children: ReactNode | string | string[]
}

export default function Code({ children }: ICodeProps) {
	return (
		<Fragment>
			{typeof children === 'string' ? (
				<code className='rounded !bg-gray-500 p-0.5 text-white before:text-gray-500 after:text-gray-500'>
					{children}
				</code>
			) : (
				<code>{children}</code>
			)}
		</Fragment>
	)
}
