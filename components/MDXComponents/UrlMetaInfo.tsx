import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface MetaData {
	title: string
	description: string
	image: string
}

interface UrlMetaInfoProps {
	url: string
}

function UrlMetaInfo({ url }: UrlMetaInfoProps) {
	const [metaData, setMetaData] = useState<MetaData | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url)
				const data = await response.text()
				const parser = new DOMParser()
				const htmlDoc = parser.parseFromString(data, 'text/html')
				const metaTags = htmlDoc.querySelectorAll('meta')
				console.log(
					'🚀 ~ file: UrlMetaInfo.tsx:26 ~ metaTags:',
					Array.from(metaTags).map((tag) => tag)
				)

				const metaInfo: MetaData = {
					title: (htmlDoc.querySelector('title')?.textContent || '')
						.replaceAll(' - Jatin Sharma', '')
						.replaceAll(' - DEV Community', ''),
					description: (
						Array.from(metaTags)
							.find((tag) => tag.getAttribute('name') === 'description')
							?.getAttribute('content') || ''
					).split('...')[0],
					image:
						Array.from(metaTags)
							.find((tag) => tag.getAttribute('property') === 'og:image')
							?.getAttribute('content') || '',
				}

				setMetaData(metaInfo)
			} catch (error) {
				console.error('Error fetching URL data:', error)
			}
		}

		fetchData()
	}, [url])

	if (!metaData) {
		return <div>Loading...</div>
	}

	return (
		<Link target='_blank' rel='noopener noreferrer' href={url} passHref className='!no-underline'>
			<div className='unset relative my-4 flex cursor-pointer items-center gap-2 rounded-lg ring-2 ring-gray-500 dark:hover:bg-darkSecondary'>
				<div className='!m-0 flex flex-col gap-2 px-5 py-5 sm:py-0'>
					<h4 className='!m-0 line-clamp-1'>{metaData.title}</h4>
					<p className='!m-0 text-sm !text-gray-400 line-clamp-2'>{metaData.description}</p>
				</div>
				<div className='hidden w-[184px] shrink-0 sm:flex'>
					<Image
						width={300}
						height={200}
						className='!m-0 h-full w-full rounded-lg object-contain'
						src={metaData.image}
						alt={metaData.title}
					/>
				</div>
			</div>
		</Link>
	)
}

export default UrlMetaInfo
