function LoadingSongs() {
	return (
		<>
			{Array.from(Array(10).keys()).map((item) => (
				<div
					key={item}
					className='relative flex h-[80.8px] items-center gap-5  overflow-hidden  border-l border-r border-b border-gray-300  bg-gray-100 p-4 font-barlow first:h-[81.6px] first:border-t dark:border-neutral-600 dark:bg-darkPrimary xs:pl-16 md:h-[84.8px] md:!pl-20 first:md:h-[85.6px] '
				>
					<div className='absolute left-4 hidden origin-center transform font-inter tracking-wider xs:inline-flex md:left-6'>
						#{item + 1}
					</div>

					<div className='relative h-12 w-12 origin-center transform animate-pulse bg-gray-300 dark:bg-darkSecondary'></div>
					<div className='flex flex-col gap-1'>
						<p className='h-6 w-40 animate-pulse bg-gray-300 dark:bg-darkSecondary md:h-[28px]'></p>
						<p className='delay-125 h-4 w-28 animate-pulse bg-gray-300 dark:bg-darkSecondary md:h-6'></p>
					</div>
				</div>
			))}
		</>
	)
}

export default LoadingSongs
