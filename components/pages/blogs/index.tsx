import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import PageTop from '@components/app/page-top'
import MetaData from '@components/app/seo/MetaData'
import { FadeContainer, popUp, popUpFromBottomForText, searchBarSlideAnimation } from 'constants/FramerMotionVariants'
import pageMeta from '@content/meta'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import { CgSearch } from 'react-icons/cg'
import { BiRss } from 'react-icons/bi'
import Pagination from '@components/app/pagination'
import { debounce } from '@utils/functions.util'
import BlogCard from './blog-card'

interface IBlogPageProps {
	blogs: IArticleDevTo[]
}

const BlogPage = ({ blogs }: IBlogPageProps) => {
	const [paginationInfo, setPaginationInfo] = useState({ offset: 0, take: 5 })
	const [filteredBlogs, setFilteredBlogs] = useState([...blogs])
	const searchRef = useRef<HTMLInputElement>(null!)

	const handleSearch = debounce((value: string) => {
		setFilteredBlogs(
			[...blogs]
				.filter((post) => post.title.toLowerCase().includes(value.trim().toLowerCase()))
				.slice(paginationInfo.offset, paginationInfo.offset + paginationInfo.take)
		)
	}, 300)

	function handleAutoSearch(e: any) {
		if (e.code === 'Slash' && e.ctrlKey) {
			searchRef.current.focus()
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleAutoSearch)
		return () => document.removeEventListener('keydown', handleAutoSearch)
	}, [])

	useEffect(() => {
		if (!blogs.length) return
		setFilteredBlogs([...blogs].slice(paginationInfo.offset, paginationInfo.offset + paginationInfo.take))
	}, [paginationInfo])

	return (
		<Fragment>
			<MetaData
				title={pageMeta.blogs.title}
				description={pageMeta.blogs.description}
				previewImage={pageMeta.blogs.image}
				keywords={pageMeta.blogs.keywords}
			/>

			<section className='pageTop flex flex-col gap-2'>
				<PageTop pageTitle='Blogs'>
					I've been writing online since 2021, mostly about web development and tech careers. In total, I've written{' '}
					{blogs.length} articles till now.
				</PageTop>

				<AnimatedDiv
					className='group relative mx-auto w-0 rounded-md bg-white text-slate-400 dark:bg-darkSecondary dark:text-gray-300'
					variants={searchBarSlideAnimation}
				>
					<CgSearch className='absolute top-[50%] z-10 ml-3 h-5 w-5 -translate-y-1/2' />
					<input
						ref={searchRef}
						className='dark:highlight-white/5  group relative  mx-auto flex w-full items-center rounded-md bg-transparent px-12 py-3 font-inter text-sm font-medium leading-6 text-slate-400 shadow-sm outline-none ring-1  ring-slate-900/10 transition duration-200 hover:ring-slate-400 focus:ring-slate-400  lg:flex dark:hover:bg-darkSecondary/90'
						type='text'
						onChange={(e) => handleSearch(e.target.value)}
						placeholder='Press (CTRL + /) to search... '
					/>
				</AnimatedDiv>

				<section className='relative flex  min-h-[50vh] flex-col gap-2 py-5'>
					<AnimatePresence>
						{filteredBlogs.length != 0 ? (
							<>
								<AnimatedDiv variants={FadeContainer} className='flex items-center justify-between'>
									<motion.h3
										variants={popUpFromBottomForText}
										className='my-5 text-left text-2xl font-bold sm:text-3xl'
									>
										All Posts ({filteredBlogs.length})
									</motion.h3>

									<div className='flex items-center gap-2'>
										<Link href='/rss' legacyBehavior>
											<motion.div variants={popUp}>
												<BiRss title='RSS' className='cursor-pointer text-3xl' />
											</motion.div>
										</Link>
									</div>
								</AnimatedDiv>

								<AnimatedDiv variants={FadeContainer} className={`mx-auto grid grid-cols-1 gap-4`}>
									{filteredBlogs.map((blog, index) => {
										return <BlogCard key={index} blog={blog} />
									})}
								</AnimatedDiv>
								{Math.ceil(blogs.length / paginationInfo.take) > 1 && (
									<AnimatedDiv variants={FadeContainer} className={`mx-auto flex items-center justify-center`}>
										<Pagination
											total={blogs.length}
											maxRowsPerPage={paginationInfo.take}
											handleChange={(offset) => setPaginationInfo({ ...paginationInfo, offset })}
											page={paginationInfo.offset}
										/>
									</AnimatedDiv>
								)}
							</>
						) : (
							<div className='text-center font-inter font-medium dark:text-gray-400'>No Result Found</div>
						)}
					</AnimatePresence>
				</section>
			</section>
		</Fragment>
	)
}

export default BlogPage
