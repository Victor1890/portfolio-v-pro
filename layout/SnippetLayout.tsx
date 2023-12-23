import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import Image from 'next/image'
import { opacityVariant } from '@content/FramerMotionVariants'

export default function SnippetLayout({ snippet, children }: { snippet: any; children: JSX.Element }) {
	return (
		<section className='relative mt-[44px]  !overflow-hidden md:mt-[60px]'>
			<section className='prose relative mx-auto max-w-3xl p-5 font-barlow dark:prose-invert sm:pt-10'>
				<div className='flex items-center justify-between'>
					<h1 className='m-0 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
						{snippet.title}
					</h1>

					<div className='relative flex h-12 w-12 items-center justify-center overflow-hidden p-1'>
						<Image
							className='m-0'
							src={snippet.language.image.asset.url}
							alt={snippet.title}
							width={62}
							height={62}
						></Image>
					</div>
				</div>

				<p>{snippet.excerpt}</p>

				<AnimatedDiv
					variants={opacityVariant}
					className='blog-container prose-sm max-w-full sm:prose-base marker:text-black prose-pre:bg-white prose-pre:shadow prose-pre:saturate-150 dark:marker:text-white dark:prose-pre:bg-darkSecondary dark:prose-pre:shadow-black/80 dark:prose-pre:saturate-100'
				>
					{children}
				</AnimatedDiv>
			</section>
		</section>
	)
}
