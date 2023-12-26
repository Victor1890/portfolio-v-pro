import AnimatedHeading from '@components/FramerMotion/AnimatedHeading'
import { headingFromLeft } from '@content/FramerMotionVariants'

interface IHomeHeadingProps {
	title: React.ReactNode | string
}

const Heading = ({ title }: IHomeHeadingProps) => (
	<AnimatedHeading className='my-2 w-full text-left font-inter text-3xl font-bold' variants={headingFromLeft}>
		{title}
	</AnimatedHeading>
)

export default Heading
