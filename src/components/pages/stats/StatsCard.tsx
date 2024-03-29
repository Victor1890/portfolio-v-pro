import { motion } from 'framer-motion'
import { popUp } from '@constants/FramerMotionVariants'

interface IStatsCardProps {
	title: string
	value: number | string
}

export default function StatsCard({ title, value }: IStatsCardProps) {
	return (
		<motion.div
			className='group origin-center transform select-none flex-col justify-center rounded-md border border-transparent bg-white px-7 py-4 shadow hover:border-gray-400 dark:bg-darkSecondary dark:shadow-md dark:hover:border-neutral-600'
			variants={popUp}
		>
			<h3 className='my-2 text-3xl font-bold text-gray-600 group-hover:text-black dark:text-gray-200 dark:group-hover:text-white'>
				{value ?? <div className='h-8 w-28 animate-pulse rounded-sm bg-gray-300 dark:bg-neutral-700' />}
			</h3>
			<p className='text-base font-medium text-gray-600 group-hover:text-black dark:text-gray-400 dark:group-hover:text-white'>
				{title}
			</p>
		</motion.div>
	)
}
