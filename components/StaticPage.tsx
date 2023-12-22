import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import MDXComponents from '@components/MDXComponents'
import { MDXRemote } from 'next-mdx-remote'
import MetaData from '@components/MetaData'
import { PageData } from '@lib/types'
import PageTop from '@components/PageTop'
import { opacityVariant } from '@content/FramerMotionVariants'
import { IStaticInfo } from 'interfaces/about/about.interface'

export default function StaticPage({
	metadata,
	page,
	showDescription = false,
}: {
	metadata: PageData
	page: IStaticInfo
	showDescription?: boolean
}) {
	return (
		<>
			<MetaData
				title={metadata.title}
				description={metadata.description}
				previewImage={metadata.image}
				keywords={metadata.keywords}
			/>

			<section className='pageTop'>
				<PageTop containerClass='mb-0' pageTitle={page.title}>
					{showDescription && (metadata.description || page.excerpt)}
				</PageTop>
				<AnimatedDiv variants={opacityVariant} className='prose max-w-full dark:prose-invert'>
					<MDXRemote
						{...(page.content as any)}
						frontmatter={{
							slug: page.slug,
							excerpt: page.excerpt,
							title: page.title,
							date: page.published_at,
							keywords: page.keywords,
							image: page.cover_image,
						}}
						components={MDXComponents}
					/>
				</AnimatedDiv>
			</section>
		</>
	)
}
