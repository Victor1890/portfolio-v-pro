function LoadingArtists() {
	return (
		<>
			{Array.from(Array(5).keys()).map((item) => (
				<div
					key={item}
					className='flex h-[80.8px] items-center gap-5  overflow-hidden  border-b  border-l border-r border-gray-300 bg-gray-100 p-4 font-barlow first:h-[81.6px] first:border-t md:h-[128.8px] first:md:h-[129.6px] dark:border-neutral-600 dark:bg-darkPrimary'
				>
					<>
						<div className='hidden origin-center transform font-inter tracking-wider xs:inline-flex'>#{item + 1}</div>
						<div
							aria-label='image'
							className='relative h-12 w-12 animate-pulse rounded-full bg-gray-300 md:h-24 md:w-24 dark:bg-darkSecondary'
						></div>
						<div className='flex flex-col gap-1'>
							<h2
								aria-label='artist-name'
								className='h-6 w-40 animate-pulse bg-gray-300 md:h-[28px] dark:bg-darkSecondary'
							></h2>
							<p aria-label='followers' className='h-4 w-20 animate-pulse bg-gray-300 md:h-6 dark:bg-darkSecondary'></p>
						</div>
					</>
				</div>
			))}
		</>
	)
}

export default LoadingArtists
