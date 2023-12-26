import Blog from '../Blog'
import HomeHeading from '@components/app/heading'
import Link from 'next/link'
import { IArticleDevTo } from '@provider/dev.to/devto.interface'

export default function BlogsSection({ blogs }: { blogs: IArticleDevTo[] }) {
	return (
		<section className='mx-5 mb-5'>
			<HomeHeading title='Recent Posts' />

			<div className='mx-auto grid grid-cols-1 gap-4'>
				{blogs.map((blog, index) => {
					return <Blog key={`home-blog-${index}`} blog={blog} animate />
				})}

				<Link
					href='/blogs'
					className='group flex w-fit items-center justify-center gap-1 border-transparent font-inter font-medium transition active:scale-95 active:border-black md:ml-7'
				>
					Read all posts
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						className='ml-1 h-6 w-6 transition group-hover:translate-x-2'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z'
						></path>
					</svg>
				</Link>
			</div>
		</section>
	)
}
