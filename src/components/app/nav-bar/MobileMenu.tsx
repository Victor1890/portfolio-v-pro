import { hamFastFadeContainer, mobileNavItemSideways } from '@constants/FramerMotionVariants'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface MobileMenuProps {
	links: string[]
	handleClick: () => void
}

function MobileMenu({ links, handleClick }: MobileMenuProps) {
	return (
		<motion.div
			className='absolute left-0 top-0 z-10 h-screen w-screen bg-white font-normal dark:bg-darkPrimary sm:hidden'
			variants={hamFastFadeContainer}
			initial='hidden'
			animate='visible'
			exit='hidden'
		>
			<motion.nav className='mx-8 mt-28 flex flex-col'>
				{links.slice(0, 8).map((link, index) => {
					const navLink = link.toLowerCase() === 'home' ? '/' : `/${link.toLowerCase()}`
					return (
						<Link
							href={navLink}
							key={`mobileNav-${index}`}
							onClick={handleClick}
							className='flex w-auto cursor-pointer border-b border-gray-300 py-4 text-base font-semibold capitalize text-gray-900 dark:border-gray-700 dark:text-gray-100'
						>
							<motion.p variants={mobileNavItemSideways}>{link === 'rss' ? link.toUpperCase() : link}</motion.p>
						</Link>
					)
				})}
			</motion.nav>
		</motion.div>
	)
}

export default MobileMenu
