import AnimatedText from '@components/FramerMotion/AnimatedText'
import { fromLeftVariant, opacityVariant } from '@constants/FramerMotionVariants'
import clsx from 'classnames'

interface PageTopProps {
	pageTitle: string
	headingClass?: string
	containerClass?: string
	children?: React.ReactNode
}

export default function PageTop({ pageTitle, headingClass, containerClass, children }: PageTopProps) {
	return (
		<div className={clsx('mb-10 flex w-full select-none flex-col gap-3 py-5', containerClass)}>
			<AnimatedText
				as='h1'
				variants={fromLeftVariant}
				className={clsx('text-4xl font-bold text-neutral-900 dark:text-neutral-200 md:text-5xl', headingClass)}
			>
				{pageTitle}
			</AnimatedText>
			<AnimatedText as='p' variants={opacityVariant} className='text-lg text-gray-600 dark:text-gray-400'>
				{children}
			</AnimatedText>
		</div>
	)
}
