import { popUp } from '@constants/FramerMotionVariants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useMemo } from 'react'

interface IFooterLinkProps {
	route: string
	text: string
}

const FooterLink = ({ route, text }: IFooterLinkProps) => {
	const link = useMemo(() => {
		const hasSlash = route.includes('/')
		return hasSlash ? route : `/${route}`
	}, [route])

	return (
		<Link title={`More info | ${text}`} href={link}>
			<motion.p className='w-fit hover:text-black dark:hover:text-white' variants={popUp}>
				{text}
			</motion.p>
		</Link>
	)
}

export default FooterLink
