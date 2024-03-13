import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { popUp } from '@constants/FramerMotionVariants'

interface NavItemProps {
	href: string
	text: string
}

function NavItem({ href, text }: NavItemProps) {
	const pathname = usePathname()

	const isActive = pathname === (href === '/home' ? '/' : href)
	return (
		<Link
			className={`${
				isActive ? 'font-bold text-gray-800 dark:text-gray-100' : ' text-gray-600 dark:text-gray-300'
			} hidden rounded-md px-2 py-[3px] text-[17px] transition-all hover:bg-black/10 dark:hover:bg-neutral-700/50  sm:inline-block md:px-3`}
			href={href === '/home' ? '/' : href}
		>
			<motion.p className='capitalize' variants={popUp}>
				{text}
			</motion.p>
		</Link>
	)
}

export default NavItem
