import Image from 'next/image'
import Link from 'next/link'

type TrackProps = {
	url: string
	title: string
	artist: string
	coverImage: string
	id: number
}

export default function SpotifyTrack({ url, title, artist, coverImage, id }: TrackProps) {
	return (
		<Link
			href={url}
			title={`Open ${title} by ${artist} on Spotify`}
			rel='noreferrer'
			target='_blank'
			className='xs:pl-16 relative flex items-center gap-5 overflow-hidden border-b border-l  border-r border-gray-300 bg-gray-100 p-4 font-barlow first:border-t hover:bg-white dark:border-neutral-600 dark:bg-darkPrimary hover:dark:bg-darkSecondary md:!pl-20 '
		>
			<>
				<div className='xs:inline-flex absolute left-4 hidden origin-center transform font-inter text-xl tracking-wider text-gray-500 md:left-6'>
					#{id + 1}
				</div>

				<div className='relative h-12 w-12 origin-center transform'>
					{coverImage ? (
						<Image src={coverImage} width={50} height={50} alt={title} quality={50} loading='lazy' />
					) : (
						<div className='h-full w-full animate-pulse bg-white'></div>
					)}
				</div>
				<div>
					<p className='origin-left transform font-barlow text-base font-semibold text-gray-900 dark:text-white md:text-xl'>
						{title ?? <div className='h-4 w-full animate-pulse bg-white'></div>}
					</p>
					<p className='line-clamp-1 origin-left transform text-xs text-gray-500 sm:text-sm md:text-base'>
						{artist ?? <div className='h-4 w-full animate-pulse bg-white'></div>}
					</p>
				</div>
			</>
		</Link>
	)
}
