import { useDarkMode } from '@context/darkModeContext'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import HamBurger from './HamBurger'
import MobileMenu from './MobileMenu'
import { navigationRoutes } from '@utils/utils'
import Link from 'next/link'
import Logo from '@components/SVG/Logo'
import config from '@config'
import NavItem from './NavItem'
import { FadeContainer, popUp } from '@constants/FramerMotionVariants'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const { personName } = config

const Navbar = () => {
	const navRef = useRef<HTMLDivElement>(null)

	/*  Using to control animation as I'll show the name to the mobile navbar when you scroll a bit
	 * demo: https://i.imgur.com/5LKI5DY.gif
	 */
	const control = useAnimation()
	const [navOpen, setNavOpen] = useState(false)
	const { isDarkMode, changeDarkMode } = useDarkMode()

	// Adding Shadow, backdrop to the navbar as user scroll the screen
	const addShadowToNavbar = useCallback(() => {
		if (window.pageYOffset > 10) {
			navRef.current!.classList.add(...['shadow', 'backdrop-blur-xl', 'bg-white/70', 'dark:bg-darkSecondary'])

			control.start('visible')
		} else {
			navRef.current!.classList.remove(...['shadow', 'backdrop-blur-xl', 'bg-white/70', 'dark:bg-darkSecondary'])
			control.start('hidden')
		}
	}, [control])

	useEffect(() => {
		window.addEventListener('scroll', addShadowToNavbar)
		return () => {
			window.removeEventListener('scroll', addShadowToNavbar)
		}
	}, [addShadowToNavbar])

	// to lock the scroll when mobile is open
	function lockScroll() {
		const root = document.getElementsByTagName('html')[0]
		root.classList.toggle('lock-scroll') // class is define in the global.css
	}

	/* To Lock  the Scroll when user visit the mobile nav page */
	function handleClick() {
		lockScroll()
		setNavOpen(!navOpen)
	}

	return (
		<div
			className='fixed top-0 z-50 flex w-full items-center justify-between px-4 py-[10px] dark:text-white sm:px-6 print:hidden'
			ref={navRef}
		>
			{/* Mobile Navigation Hamburger and MobileMenu */}
			<HamBurger open={navOpen} handleClick={handleClick} />
			<AnimatePresence>{navOpen && <MobileMenu links={navigationRoutes} handleClick={handleClick} />}</AnimatePresence>

			<Link href='/' className='mr-3' aria-label='Link to Home Page'>
				<Logo className='relative hidden h-8 w-8 sm:inline-flex' />
				<div className='w-full sm:!hidden'>
					<motion.p
						initial='hidden'
						animate={control}
						variants={{
							hidden: { opacity: 0, scale: 1, display: 'none' },
							visible: { opacity: 1, scale: 1, display: 'inline-flex' },
						}}
						className='font-sarina'
					>
						{personName}
					</motion.p>
				</div>
			</Link>

			{/* Top Nav list */}
			<motion.nav className='z-10 hidden sm:flex md:inset-0 md:justify-center'>
				<motion.div initial='hidden' animate='visible' variants={FadeContainer} className='flex items-center md:gap-2'>
					{navigationRoutes.slice(0, 7).map((link, index) => {
						return <NavItem key={index} href={`/${link}`} text={link} />
					})}
				</motion.div>
			</motion.nav>

			{/* DarkMode Container */}
			<motion.div initial='hidden' animate='visible' variants={popUp} className='cursor-pointer' title='Toggle Theme'>
				<DarkModeSwitch checked={isDarkMode} onChange={changeDarkMode} size={24} />
			</motion.div>
		</div>
	)
}

export default Navbar
