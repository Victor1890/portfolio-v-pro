import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import PageTop from '@components/app/page-top'
import CreateAnIssue from '@components/app/create-issue'
import MetaData from '@components/app/meta/MetaData'
import { FadeContainer } from 'constants/FramerMotionVariants'
import pageMeta from '@content/meta'
import projectData from '@content/projectData'
import { Fragment } from 'react'
import ProjectCard from './project-card'

const ProjectPage = () => {
	if (!projectData.length) return <CreateAnIssue />

	return (
		<Fragment>
			<MetaData
				title={pageMeta.projects.title}
				description={pageMeta.projects.description}
				previewImage={pageMeta.projects.image}
				keywords={pageMeta.projects.keywords}
			/>
			<section className='pageTop'>
				<PageTop pageTitle='Projects'>
					I've been making various types of projects some of them were basics and some of them were complicated. So far
					I've made <span className='font-bold text-gray-600 dark:text-gray-200'>{projectData.length}+</span> projects.
				</PageTop>

				<AnimatedDiv variants={FadeContainer} className='mx-auto grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]'>
					{projectData.map((project) => {
						if (!project.name) return null
						return <ProjectCard key={project.id} project={project} />
					})}
				</AnimatedDiv>
			</section>
		</Fragment>
	)
}

export default ProjectPage
