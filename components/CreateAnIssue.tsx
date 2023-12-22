import Link from 'next/link'
import React from 'react'
import config from '@config'

const { github } = config

export default function CreateAnIssue() {
	return (
		<div className='grid h-screen w-full place-items-center px-10 dark:text-gray-200 sm:px-20'>
			<p>
				Something went wrong. I know you don't know what's the problem. So Let me know by{' '}
				<Link
					// TODO: Add a link to the issue page
					href={`https://github.com/${github.username}/j471n.in/issues/new`}
					target='_blank'
					rel='noopener noreferrer'
					className='font-bold underline hover:text-blue-500 '
				>
					creating an issue
				</Link>{' '}
				on GitHub.
			</p>
		</div>
	)
}
