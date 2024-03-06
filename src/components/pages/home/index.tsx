'use client'

import { FadeContainer, opacityVariant, popUp } from '@constants/FramerMotionVariants'
import { IArticle } from '@provider/dev.to/devto.interface'
import { homeProfileImage } from '@utils/utils'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FiDownload } from 'react-icons/fi'
const SkillSection = dynamic(() => import('@components/pages/home/SkillSection'), { ssr: false })
const BlogsSection = dynamic(() => import('@components/pages/home/BlogsSection'), { ssr: false })
const Contact = dynamic(() => import('@components/pages/home/Contact'), { ssr: false })

interface IHomePageProps {
	blogs: IArticle[]
}

const HomePage = ({ blogs = [] }: IHomePageProps) => (
	<div className='relative mx-auto max-w-4xl dark:bg-darkPrimary dark:text-gray-100 2xl:max-w-5xl 3xl:max-w-7xl'>
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
					className='xs:h-52 xs:w-52 relative flex h-44 w-44 items-center justify-center rounded-full p-3 before:absolute before:inset-0 before:animate-photo-spin before:rounded-full before:border-b-4 before:border-t-4 before:border-black before:dark:border-white'
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
						<motion.h1 variants={opacityVariant} className='font-sarina text-5xl lg:text-6xl'>
							Victor Rosario
						</motion.h1>
						<motion.p
							variants={opacityVariant}
							className='text-xs font-medium text-[#383838] dark:text-gray-200 md:text-sm lg:text-lg'
						>
							Software Developer at{' '}
							<Link
								href='https://www.linkedin.com/company/compiterd/'
								target='_blank'
								className='hover:underline'
								rel='noopener noreferrer'
							>
								@CNC
							</Link>
						</motion.p>
					</div>

					<motion.p
						variants={opacityVariant}
						className=' text-center text-sm font-medium text-[#474747] dark:text-gray-300 md:text-base'
					>
						{/* I am currently pursuing my Bachelor Degree in Computer Science. */}I can code in JavaScript, TypeScript,
						C#, Python, etc.
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
			{blogs.length ? <BlogsSection blogs={blogs} /> : null}
			<Contact />
		</div>
	</div>
)

export default HomePage
