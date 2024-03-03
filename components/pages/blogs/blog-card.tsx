import { IArticle } from '@provider/dev.to/devto.interface'
import { getFormattedDate } from '@utils/date.util'
import { BlogCardAnimation } from 'constants/FramerMotionVariants'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function BlogCard({ blog, animate = false }: { blog: IArticle; animate?: boolean }) {
	const blogRef = useRef(null)
	return (
		<motion.article
			ref={blogRef}
			variants={BlogCardAnimation}
			initial={animate && 'hidden'}
			whileInView={animate ? 'visible' : ''}
			viewport={{ once: true }}
			className={`w-ull mx-auto flex flex-col items-center gap-2 rounded-2xl bg-white p-2 shadow-md dark:bg-darkSecondary sm:w-[95%] sm:flex-row md:gap-7 md:shadow-lg`}
		>
			<div className='w-full'>
				<Image
					title={blog.title}
					alt={blog.title}
					src={blog.cover_image}
					width={1200}
					height={630}
					blurDataURL={blog.cover_image}
					quality={25}
					className='my-auto rounded-xl backdrop-blur-xl transition-all duration-300'
				/>
			</div>

			<div className='mt-2 flex h-full w-full flex-col px-2 pb-2 sm:mt-0 sm:p-1 md:pr-5 2xl:py-5'>
				<Link
					href={`/blogs/${blog.slug}`}
					className='line-clamp-2 font-bold text-neutral-900 hover:underline dark:text-neutral-200 md:text-xl'
				>
					{blog.title}
				</Link>
				<p className='mb-5 mt-3 line-clamp-3 text-sm  text-gray-600 dark:text-[#b5b7ba] sm:line-clamp-2 sm:text-xs md:line-clamp-4 md:text-sm'>
					{blog.description}
				</p>

				<div className='mt-auto flex items-center justify-between'>
					<div className='z-10 flex items-center gap-3 font-barlow'>
						<div className='w-[30px]'>
							<Image
								alt={blog?.organization ? blog?.organization.name : blog.user.name}
								height={933}
								width={933}
								src={blog?.organization ? blog?.organization.profile_image : blog.user.profile_image}
								className='!m-0 h-full rounded-full'
							/>
						</div>
						<div className='flex flex-col'>
							<div className='flex items-center gap-1 text-sm'>
								<Link href='/about' className='text-sm font-medium hover:underline'>
									{blog.user.name}
								</Link>
								{blog?.organization && (
									<span>
										for{' '}
										<Link href={'#' || blog?.organization.name} className='font-medium hover:underline'>
											{blog?.organization.name}
										</Link>
									</span>
								)}
							</div>
							<span className='text-xs'>{getFormattedDate(new Date(blog.published_at))}</span>
						</div>
					</div>
				</div>
			</div>
		</motion.article>
	)
}
