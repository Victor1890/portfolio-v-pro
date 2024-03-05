import { SiSpotify } from 'react-icons/si'

function NotPlaying() {
	return (
		<div className='flex flex-row-reverse items-center justify-between gap-2 sm:flex-row sm:justify-start'>
			<SiSpotify className='h-6 w-6' />
			<div className='flex flex-col sm:flex-row sm:items-center sm:gap-3'>
				<div className='font-semibold text-black dark:text-white md:text-lg'>Not Playing</div>
				<span className='hidden md:inline-flex'>—</span>
				<p className='text-xs text-gray-500 sm:text-sm'>Spotify</p>
			</div>
		</div>
	)
}

export default NotPlaying
