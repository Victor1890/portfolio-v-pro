import AnimatedText from '@components/FramerMotion/AnimatedText'
import PageTop from '@components/app/page-top'
import MetaData from '@components/app/seo/MetaData'
import { opacityVariant } from 'constants/FramerMotionVariants'
import pageMeta from '@content/meta'
import utilities from '@content/utilitiesData'
import { Fragment } from 'react'
import UtilitySection from './session'

const UtilityPage = () => (
	<Fragment>
		<MetaData
			title={pageMeta.utilities.title}
			description={utilities.description}
			previewImage={pageMeta.utilities.image}
			keywords={pageMeta.utilities.keywords}
		/>

		<section className='pageTop font-inter'>
			<PageTop pageTitle={utilities.title}>{utilities.description}</PageTop>

			<div className='flex flex-col gap-14'>
				{utilities.data.map((utility, index) => (
					<UtilitySection key={index} utility={utility} />
				))}
			</div>

			<AnimatedText variants={opacityVariant} className='-mb-10 mt-12'>
				Last Update on <span className='font-semibold'>{utilities.lastUpdate}</span>
			</AnimatedText>
		</section>
	</Fragment>
)

export default UtilityPage
