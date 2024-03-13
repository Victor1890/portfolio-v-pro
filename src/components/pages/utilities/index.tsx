'use client'

import AnimatedText from '@components/FramerMotion/AnimatedText'
import PageTop from '@components/app/page-top'
import { opacityVariant } from '@constants/FramerMotionVariants'
import utilities from '@content/utilitiesData'
import UtilitySection from './session'

const UtilityPage = () => (
	<section className='pageTop font-inter'>
		<PageTop pageTitle={utilities.title}>{utilities.description}</PageTop>

		<div className='flex flex-col gap-14'>
			{utilities.data.map((utility, index) => (
				<UtilitySection key={index} utility={utility} />
			))}
		</div>

		<AnimatedText as='p' variants={opacityVariant} className='-mb-10 mt-12'>
			Last Update on <span className='font-semibold'>{utilities.lastUpdate}</span>
		</AnimatedText>
	</section>
)

export default UtilityPage
