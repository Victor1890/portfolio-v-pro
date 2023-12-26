function SpotifyLoadingSongs() {
	return (
		<>
			{Array.from(Array(10).keys()).map((item) => (
				<div
					key={item}
					className='xs:pl-16 relative flex h-[80.8px] items-center  gap-5  overflow-hidden border-b border-l border-r  border-gray-300 bg-gray-100 p-4 font-barlow first:h-[81.6px] first:border-t md:h-[84.8px] md:!pl-20 first:md:h-[85.6px] dark:border-neutral-600 dark:bg-darkPrimary '
				>
					<div className='xs:inline-flex absolute left-4 hidden origin-center transform font-inter tracking-wider md:left-6'>
						#{item + 1}
					</div>

					<div className='relative h-12 w-12 origin-center transform animate-pulse bg-gray-300 dark:bg-darkSecondary'></div>
					<div className='flex flex-col gap-1'>
						<p className='h-6 w-40 animate-pulse bg-gray-300 md:h-[28px] dark:bg-darkSecondary'></p>
						<p className='delay-125 h-4 w-28 animate-pulse bg-gray-300 md:h-6 dark:bg-darkSecondary'></p>
					</div>
				</div>
			))}
		</>
	)
}

export default SpotifyLoadingSongs
