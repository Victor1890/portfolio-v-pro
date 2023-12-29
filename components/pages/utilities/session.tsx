/* eslint-disable @typescript-eslint/ban-ts-comment */
import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import { FadeContainer, popUp, popUpFromBottomForText } from 'constants/FramerMotionVariants'
import { IUtilityData } from '@interfaces/utility/utility.interface'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface UtilitySectionProps {
	utility: IUtilityData
}

function UtilitySection({ utility }: UtilitySectionProps) {
	return (
		<AnimatedDiv
			variants={FadeContainer}
			className='!w-full  font-medium selection:bg-blue-300 dark:text-neutral-200 dark:selection:bg-blue-900 dark:selection:text-gray-400'
		>
			<motion.h2 variants={popUpFromBottomForText} className='mb-4 font-barlow text-2xl font-bold sm:text-3xl'>
				{utility.title}
			</motion.h2>

			<AnimatedDiv
				variants={FadeContainer}
				className='mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'
			>
				{utility.data.map((item) => {
					const Icon = item.Icon
					return (
						<motion.div key={item.name} variants={popUp}>
							<Link
								title={item.name + ' - ' + item.description}
								rel='noopener noreferrer'
								target='_blank'
								href={item.link}
								className='relative flex flex-col items-center justify-center gap-3 rounded-md border border-transparent bg-white p-8  text-gray-700 shadow transition-all hover:z-10 hover:origin-center hover:border-gray-400 hover:text-black hover:shadow-lg active:!scale-90 lg:hover:!scale-125 dark:bg-darkSecondary dark:text-gray-300/80 dark:shadow-md dark:hover:border-neutral-600 dark:hover:text-white'
							>
								{/* @ts-ignore */}
								<Icon className='utilities-svg' />
								<p className='absolute bottom-3 select-none text-[10px]'>{item.name}</p>
							</Link>
						</motion.div>
					)
				})}
			</AnimatedDiv>
		</AnimatedDiv>
	)
}

export default UtilitySection
