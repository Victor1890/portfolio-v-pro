import { AnimatePresence } from 'framer-motion'
import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import { FadeContainer } from '@content/FramerMotionVariants'
// import { ISnippet } from "@lib/interface/sanity";
import Metadata from '@components/app/meta/MetaData'
import PageTop from '@components/PageTop'
import SnippetCard from '@components/SnippetCard'
// import { getAllSnippetsMeta } from "@lib/sanityContent";
import pageMeta from '@content/meta'

export default function Snippets({ snippets }: { snippets: unknown[] }) {
	return (
		<>
			<Metadata
				title={pageMeta.snippets.title}
				description={pageMeta.snippets.description}
				previewImage={pageMeta.snippets.image}
				keywords={pageMeta.snippets.keywords}
			/>

			<section className='pageTop flex flex-col gap-2'>
				<PageTop pageTitle={pageMeta.snippets.title}>{pageMeta.snippets.description}</PageTop>

				<section className='relative flex min-h-[50vh] flex-col gap-2'>
					<AnimatedDiv variants={FadeContainer} className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
						<AnimatePresence>
							{(snippets || []).map((snippet, index) => {
								return <SnippetCard key={index} snippet={snippet} />
							})}
						</AnimatePresence>
					</AnimatedDiv>
				</section>
			</section>
		</>
	)
}

export async function getStaticProps() {
	// const snippets = await getAllSnippetsMeta();

	return {
		props: { snippets: [] },
	}
}
