import { fromLeftVariant, opacityVariant } from '../content/FramerMotionVariants'
import AnimatedHeading from './FramerMotion/AnimatedHeading'
import AnimatedText from './FramerMotion/AnimatedText'

export default function PageTop({
	pageTitle,
	headingClass,
	containerClass,
	children,
}: {
	pageTitle: string
	headingClass?: string
	containerClass?: string
	children?: React.ReactNode
}) {
	return (
		<div className={`mb-10 flex w-full select-none flex-col gap-3 py-5 ${containerClass}`}>
			<AnimatedHeading
				variants={fromLeftVariant}
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
