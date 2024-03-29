import HomeHeading from '@components/app/heading'
import { FadeContainer, popUp } from '@constants/FramerMotionVariants'
import skills from '@content/skillsData'
import { useDarkMode } from '@context/darkModeContext'
import * as WindowsAnimation from '@utils/animation.util'
import { motion } from 'framer-motion'
import React from 'react'

export default function SkillSection() {
	const { isDarkMode } = useDarkMode()

	return (
		<section className='mx-5'>
			<HomeHeading as='h2' title='My Top Skills' />

			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={FadeContainer}
				viewport={{ once: true }}
				className='my-10 grid grid-cols-3 gap-4'
			>
				{skills.map((skill, index) => {
					const Icon = skill.Icon as any
					return (
						<motion.article
							variants={popUp}
							key={index}
							title={skill.name}
							onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => WindowsAnimation.showHoverAnimation(e, isDarkMode)}
							onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => WindowsAnimation.removeHoverAnimation(e)}
							className='group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 bg-gray-50 p-4 hover:bg-white dark:border-neutral-700 dark:bg-darkPrimary hover:dark:bg-darkSecondary sm:justify-start md:origin-top'
						>
							<div className='pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100'>
								<Icon className='h-8 w-8' />
							</div>
							<p className='pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base'>
								{skill.name}
							</p>
						</motion.article>
					)
				})}
			</motion.div>
		</section>
	)
}
