import { FadeContainer, headingFromLeft, opacityVariant, popUp } from '@content/FramerMotionVariants'

import AnimatedHeading from '@components/FramerMotion/AnimatedHeading'
import BlogsSection from '@components/Home/BlogsSection'
import Contact from '@components/Contact'
import { FiDownload } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'
import Metadata from '@components/MetaData'
import React, { Fragment } from 'react'
import SkillSection from '@components/Home/SkillSection'
import generateSitemap from '@lib/sitemap'
import getRSS from '@lib/generateRSS'
import { homeProfileImage } from '@utils/utils'
import { motion } from 'framer-motion'
import pageMeta from '@content/meta'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'
import devToProvider from '@provider/dev.to/devto.provider'

export default function Home({ blogs }: { blogs: IArticleDevTo[] }) {
	return (
		<Fragment>
			<Metadata
				title='Victor Rosario'
				description={pageMeta.home.description}
				previewImage={pageMeta.home.image}
				keywords={pageMeta.home.keywords}
			/>
			<div className='relative mx-auto max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl dark:bg-darkPrimary dark:text-gray-100'>
				<motion.section
					initial='hidden'
					whileInView='visible'
					variants={FadeContainer}
					viewport={{ once: true }}
					className='grid min-h-screen place-content-center py-20'
				>
					<div className='relative mx-auto flex w-full flex-col items-center gap-10'>
						<motion.div
							variants={popUp}
							className='relative flex h-44 w-44 items-center justify-center rounded-full p-3 before:absolute before:inset-0 before:animate-photo-spin before:rounded-full before:border-b-4 before:border-t-4 before:border-black xs:h-52 xs:w-52 before:dark:border-white'
						>
							<Image
								src={homeProfileImage}
								className='rounded-full shadow saturate-0 filter'
								width={933}
								height={933}
								alt='cover Profile Image'
								quality={75}
								priority
							/>
						</motion.div>

						<div className='flex w-full select-none flex-col gap-3 p-5 text-center '>
							<div className='flex flex-col gap-1'>
								<motion.h1 variants={opacityVariant} className='font-sarina text-5xl font-bold lg:text-6xl'>
									Victor Rosario
								</motion.h1>
								<motion.p
									variants={opacityVariant}
									className='text-xs font-medium text-[#383838] md:text-sm lg:text-lg dark:text-gray-200'
								>
									FullStack Developer, Competitive Programmer
								</motion.p>
							</div>

							<motion.p
								variants={opacityVariant}
								className=' text-center text-sm font-medium text-[#474747] md:text-base dark:text-gray-300'
							>
								{/* I am currently pursuing my Bachelor Degree in Computer Science. */}I can code in JavaScript,
								TypeScript, C#, Python, etc.
							</motion.p>
						</div>

						<Link
							href='https://bit.ly/j471nCV'
							target='_blank'
							rel='noopener noreferrer'
							className='flex select-none items-center gap-2 rounded-md border border-gray-500 px-5 py-2 outline-none transition-transform hover:bg-white active:scale-95 dark:border-gray-400 dark:hover:bg-neutral-800'
						>
							<FiDownload />
							<p>Resume</p>
						</Link>
					</div>
				</motion.section>

				<div>
					<SkillSection />
					{blogs && <BlogsSection blogs={blogs} />}
					<Contact />
				</div>
			</div>
		</Fragment>
	)
}

export function HomeHeading({ title }: { title: React.ReactNode | string }) {
	return (
		<AnimatedHeading className='my-2 w-full text-left font-inter text-3xl font-bold' variants={headingFromLeft}>
			{title}
		</AnimatedHeading>
	)
}

export async function getStaticProps() {
	const blogs = await devToProvider.getPageOfPosts(1, 3).catch(() => null)

	await getRSS()
	await generateSitemap()

	return {
		props: { blogs },
	}
}
