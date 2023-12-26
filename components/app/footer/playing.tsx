import { SongType } from '@interfaces/footer/footer.interface'
import Image from 'next/image'
import Link from 'next/link'
import { SiSpotify } from 'react-icons/si'

interface IPlayingProps {
	song: SongType
}

const Playing = ({ song }: IPlayingProps) => (
	<div className='flex flex-col gap-4'>
		<h4 className='text-lg font-semibold dark:text-gray-300'>Now Playing</h4>
		<Link
			href={song.songUrl}
			target='_blank'
			className='flex items-center justify-between rounded-sm bg-gray-200 p-3 sm:p-4 dark:bg-darkSecondary'
		>
			<div className='flex items-center gap-2 '>
				<div className='h-10 w-10'>
					<Image
						alt={song.title}
						src={song.albumImageUrl}
						width={40}
						height={40}
						quality={50}
						placeholder='blur'
						blurDataURL={song.albumImageUrl}
					/>
				</div>
				<div className='flex flex-col sm:flex-row sm:items-center sm:gap-3'>
					<h3 className='animate- font-semibold text-black md:text-lg dark:text-white'>{song.title}</h3>
					<span className='hidden md:inline-flex dark:text-gray-300'>—</span>

					<p className='text-xs text-gray-600 sm:text-sm dark:text-gray-400'>{song.artist}</p>
				</div>
			</div>
			<div className='flex items-center gap-2'>
				<SiSpotify className='h-6 w-6 animate-[spin_2s_linear_infinite] text-green-500' />
			</div>
		</Link>
	</div>
)

export default Playing
