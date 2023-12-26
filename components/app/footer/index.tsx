import { FadeContainer, opacityVariant } from '@content/FramerMotionVariants'
import socialMedia from '@content/socialMedia'
import fetcher from '@lib/fetcher'
import { navigationRoutes } from '@utils/utils'
import { motion } from 'framer-motion'
import { BsDot } from 'react-icons/bs'
import { HiOutlineQrcode } from 'react-icons/hi'
import useSWR from 'swr'
import FooterLink from './footer-link'
import NotPlaying from './not-playing'
import Playing from './playing'

interface IFooterProps {
	setShowQR: (value: boolean) => void
	showQR: boolean
}

const Footer = ({ setShowQR, showQR }: IFooterProps) => {
	const { data: currentSong } = useSWR('/api/now-playing', fetcher)
	const { data: visitors } = useSWR('/api/ga', fetcher)

	return (
		<footer className='mb-14 w-screen font-inter text-gray-600 print:hidden dark:text-gray-400/50'>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={FadeContainer}
				viewport={{ once: true }}
				className='mx-auto flex max-w-4xl flex-col gap-5 border-t-2 border-gray-200 p-5 text-sm sm:text-base 2xl:max-w-5xl 3xl:max-w-7xl dark:border-gray-400/10'
			>
				<div>{currentSong?.isPlaying ? <Playing song={currentSong} /> : <NotPlaying />}</div>

				<section className='grid grid-cols-3 gap-10'>
					<div className='flex flex-col gap-4 capitalize'>
						{navigationRoutes.slice(0, 5).map((text, index) => {
							return <FooterLink key={index} route={text} text={text} />
						})}
					</div>
					<div className='flex flex-col gap-4 capitalize'>
						{navigationRoutes.slice(5, navigationRoutes.length).map((route, index) => {
							let text = route
							if (route === 'rss') text = 'RSS'
							return <FooterLink key={`${index}-${text}`} route={route} text={text} />
						})}
					</div>
					<div className='flex flex-col gap-4 capitalize'>
						{socialMedia.slice(0, 5).map((platform, index) => {
							return <FooterLink key={`social-medial-${index}`} route={platform.url} text={platform.title} />
						})}
					</div>
				</section>
				<motion.div variants={opacityVariant} className='mt-5 flex w-full items-center justify-between gap-4 '>
					<div className='relative flex items-center rounded-full bg-white px-4 py-1 text-xs shadow sm:text-sm dark:bg-darkSecondary'>
						<BsDot className='-ml-2 h-7 w-7 animate-ping text-green-500' />
						<div className='flex items-center gap-1'>
							{visitors?.totalVisitors ?? (
								<div className='h-3 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-darkPrimary'></div>
							)}
							visitors in last {visitors?.days} days
						</div>
					</div>
					<div
						onClick={() => setShowQR(!showQR)}
						className='cursor-pointer rounded-full bg-gray-700 p-3 text-white transition-all hover:scale-105 active:scale-90'
					>
						<HiOutlineQrcode className='h-5 w-5 ' />
					</div>
				</motion.div>
			</motion.div>
		</footer>
	)
}

export default Footer
