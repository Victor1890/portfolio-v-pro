import { popUp } from 'constants/FramerMotionVariants'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface IFooterLinkProps {
	route: string
	text: string
}

const FooterLink = ({ route, text }: IFooterLinkProps) => {
	return (
		<Link href={route}>
			<motion.p className='w-fit hover:text-black dark:hover:text-white' variants={popUp}>
				{text}
			</motion.p>
		</Link>
	)
}

export default FooterLink
