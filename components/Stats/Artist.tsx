import Image from 'next/image'
import Link from 'next/link'

type ArtistProps = {
	name: string
	url: string
	coverImage: string
	popularity: number
	id: number
}

export default function Artist({ name, url, coverImage, popularity, id }: ArtistProps) {
	return (
		<Link
			rel='noreferrer'
			target='_blank'
			href={url}
			className='flex items-center gap-5 overflow-hidden border-b border-l border-r border-gray-300 bg-gray-100 p-4 font-barlow first:border-t hover:bg-white dark:border-neutral-600 dark:bg-darkPrimary hover:dark:bg-darkSecondary'
		>
			<>
				<div className='hidden origin-center transform font-inter text-xl tracking-wider text-gray-500 xs:inline-flex'>
					#{id + 1}
				</div>
				<div className='relative h-12 w-12 origin-center transform md:h-24 md:w-24'>
					<Image
						className='rounded-full'
						src={coverImage}
						width={100}
						height={100}
						alt={name}
						quality={50}
						style={{
							height: '100%',
						}}
					></Image>
				</div>
				<div>
					<h2 className='origin-left transform font-barlow text-base font-semibold text-gray-900 dark:text-white sm:text-lg md:text-xl md:font-bold xl:text-2xl'>
						{name}
					</h2>
					<p className='origin-left transform text-xs text-gray-500 line-clamp-1 sm:text-sm md:text-base md:font-medium'>
						Popularity: {popularity}
					</p>
				</div>
			</>
		</Link>
	)
}
