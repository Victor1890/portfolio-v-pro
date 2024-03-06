import AnimatedHeading from '@components/FramerMotion/AnimatedHeading'
import AnimatedText from '@components/FramerMotion/AnimatedText'
import { fromLeftVariant, opacityVariant } from 'constants/FramerMotionVariants'

interface PageTopProps {
	pageTitle: string
	headingClass?: string
	containerClass?: string
	children?: React.ReactNode
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function PageTop({ pageTitle, headingClass, containerClass, children, variant }: PageTopProps) {
	return (
		<div className={`mb-10 flex w-full select-none flex-col gap-3 py-5 ${containerClass}`}>
			<AnimatedHeading
				variants={fromLeftVariant}
				variant={variant}
				className={`text-4xl  font-bold text-neutral-900 dark:text-neutral-200 md:text-5xl ${headingClass}`}
			>
				{pageTitle}
			</AnimatedHeading>
			<AnimatedText variants={opacityVariant} className='text-lg text-gray-600 dark:text-gray-400'>
				{children}
			</AnimatedText>
		</div>
	)
}
