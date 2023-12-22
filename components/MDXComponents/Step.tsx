import React from 'react'

export default function Step({ id, children }: { id: string; children?: JSX.Element }) {
	return (
		<div className={`flex items-center gap-3 ${children?.type === undefined && 'my-5'}`}>
			<div className='g-gray-300 flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 p-5 font-bold text-black ring dark:border-gray-800 dark:bg-darkSecondary dark:text-white '>
				{id}
			</div>
			<div className='w-fit flex-grow-0 text-lg font-semibold tracking-tight text-black dark:text-white'>
				{children}
			</div>
		</div>
	)
}
