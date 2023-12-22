import Link from 'next/link'
import Image from 'next/image'
import socialMedia from '@content/socialMedia'
import { FadeContainer, opacityVariant, popUp } from '../content/FramerMotionVariants'
import { navigationRoutes } from '../utils/utils'
import { motion } from 'framer-motion'
import { SiSpotify } from 'react-icons/si'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import { HiOutlineQrcode } from 'react-icons/hi'
import { BsDot } from 'react-icons/bs'
import { Song } from '@lib/types'

export default function Footer({ setShowQR, showQR }: { setShowQR: (value: boolean) => void; showQR: boolean }) {
	const { data: currentSong } = useSWR('/api/now-playing', fetcher)
	const { data: visitors } = useSWR('/api/ga', fetcher)

	return (
		<footer className='mb-14 w-screen font-inter text-gray-600 dark:text-gray-400/50 print:hidden'>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={FadeContainer}
				viewport={{ once: true }}
				className='mx-auto flex max-w-4xl flex-col gap-5 border-t-2 border-gray-200 p-5 text-sm dark:border-gray-400/10 sm:text-base 2xl:max-w-5xl 3xl:max-w-7xl'
			>
				<div>{currentSong?.isPlaying ? <WhenPlaying song={currentSong} /> : <NotPlaying />}</div>

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
							return <FooterLink key={index} route={route} text={text} />
						})}
					</div>
					<div className='flex flex-col gap-4 capitalize'>
						{socialMedia.slice(0, 5).map((platform, index) => {
							return (
								<Link key={index} href={platform.url} target='_blank' rel='noopener noreferrer'>
									<motion.p className='w-fit hover:text-black dark:hover:text-white' variants={popUp}>
										{platform.title}
									</motion.p>
								</Link>
							)
						})}
					</div>
				</section>
				<motion.div variants={opacityVariant} className='mt-5 flex w-full items-center justify-between gap-4 '>
					<div className='relative flex items-center rounded-full bg-white px-4 py-1 text-xs shadow dark:bg-darkSecondary sm:text-sm'>
						<BsDot className='-ml-2 h-7 w-7 animate-ping text-green-500' />
						<div className='flex items-center gap-1'>
							{visitors?.totalVisitors ?? (
								<div className='h-3 w-10 animate-pulse rounded-full bg-gray-300 dark:bg-darkPrimary'></div>
							)}{' '}
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

				<motion.div
					variants={opacityVariant}
					className='mt-5 flex items-center justify-center gap-2 text-black dark:text-white'
				>
					<span>Powered by</span>

					<Link
						target='_blank'
						aria-label='Next.js'
						rel='noreferrer'
						href='https://nextjs.org'
						className='font-semibold hover:underline'
					>
						Next.js
					</Link>
					<span>and</span>
					<Link
						target='_blank'
						aria-label='Vercel'
						rel='noreferrer'
						href='https://vercel.com'
						className='font-semibold hover:underline'
					>
						Vercel
					</Link>
				</motion.div>
			</motion.div>
		</footer>
	)
}

function FooterLink({ route, text }: { route: string; text: string }) {
	return (
		<Link href={`/${route}`}>
			<motion.p className='w-fit hover:text-black dark:hover:text-white' variants={popUp}>
				{text}
			</motion.p>
		</Link>
	)
}

function NotPlaying() {
	return (
		<div className='flex flex-row-reverse items-center justify-between gap-2 sm:flex-row sm:justify-start'>
			<SiSpotify className='h-6 w-6' />
			<div className='flex flex-col sm:flex-row sm:items-center sm:gap-3'>
				<div className='font-semibold text-black dark:text-white md:text-lg'>Not Playing</div>
				<span className='hidden md:inline-flex'>—</span>
				<p className='text-xs text-gray-500 sm:text-sm'>Spotify</p>
			</div>
		</div>
	)
}

function WhenPlaying({ song }: { song: Song }) {
	return (
		<div className='flex flex-col gap-4'>
			<h4 className='text-lg font-semibold dark:text-gray-300'>Now Playing</h4>
			<Link
				href={song.songUrl}
				className='flex items-center justify-between rounded-sm bg-gray-200 p-3 dark:bg-darkSecondary sm:p-4'
			>
				<div className='flex items-center gap-2 '>
					<div className='h-10 w-10'>
						<Image
							alt={song.title}
							src={song.albumImageUrl}
							width={40}
							height={40}
							quality={50}
							placeholder='blur'
							blurDataURL={song.albumImageUrl}
						/>
					</div>
					<div className='flex flex-col sm:flex-row sm:items-center sm:gap-3'>
						<h3 className='animate- font-semibold text-black dark:text-white md:text-lg'>{song.title}</h3>
						<span className='hidden dark:text-gray-300 md:inline-flex'>—</span>

						<p className='text-xs text-gray-600 dark:text-gray-400 sm:text-sm'>{song.artist}</p>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<SiSpotify className='h-6 w-6 animate-[spin_2s_linear_infinite] text-green-500' />
				</div>
			</Link>
		</div>
	)
}
