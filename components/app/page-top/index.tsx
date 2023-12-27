import AnimatedHeading from '@components/FramerMotion/AnimatedHeading'
import AnimatedText from '@components/FramerMotion/AnimatedText'
import { fromLeftVariant, opacityVariant } from '@content/FramerMotionVariants'

interface PageTopProps {
	pageTitle: string
	headingClass?: string
	containerClass?: string
	children?: React.ReactNode
}

export default function PageTop({ pageTitle, headingClass, containerClass, children }: PageTopProps) {
	return (
		<div className={`mb-10 flex w-full select-none flex-col gap-3 py-5 ${containerClass}`}>
			<AnimatedHeading
				variants={fromLeftVariant}
				className={`text-4xl  font-bold text-neutral-900 md:text-5xl dark:text-neutral-200 ${headingClass}`}
			>
				{pageTitle}
			</AnimatedHeading>
			<AnimatedText variants={opacityVariant} className='text-lg text-gray-600 dark:text-gray-400'>
				{children}
			</AnimatedText>
		</div>
	)
}
