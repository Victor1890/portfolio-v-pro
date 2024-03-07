import AnimatedText from '@components/FramerMotion/AnimatedText'
import { headingFromLeft } from '@constants/FramerMotionVariants'

interface IHomeHeadingProps {
	title: React.ReactNode | string
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = ({ title, as }: IHomeHeadingProps) => (
	<AnimatedText as={as} className='my-2 w-full text-left font-inter text-3xl font-bold' variants={headingFromLeft}>
		{title}
	</AnimatedText>
)

export default Heading
