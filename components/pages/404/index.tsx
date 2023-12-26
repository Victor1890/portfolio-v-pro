import MetaData from '@components/app/meta/MetaData'
import Link from 'next/link'
import { Fragment } from 'react'

const PageNotFoundPage = () => (
	<Fragment>
		<MetaData title='404' suffix='Page Not Found' description='You are lost in Space !!!' />
		<section className='pageTop flex flex-col gap-5 md:pt-20'>
			<h1 className='font-barlow text-3xl font-bold uppercase md:text-5xl dark:text-white'>
				Stay calm and don't freak out!!
			</h1>
			<p className='font-inter text-gray-500 dark:text-gray-400/70'>
				Looks like you've found the doorway to the great nothing. You didn't break the internet, but I can't find what
				you are looking for. Please visit my <b>Homepage</b> to get where you need to go.
			</p>

			<Link
				href='/'
				className='xs:mx-0 xs:max-w-[200px] mx-auto w-full select-none rounded-md bg-gray-300 p-3 text-center font-bold text-black ring-black/50 transition-all active:scale-95 sm:p-3 lg:hover:ring-2  dark:bg-darkSecondary dark:text-white dark:ring-white/50'
			>
				Take me there!
			</Link>
		</section>
	</Fragment>
)

export default PageNotFoundPage
