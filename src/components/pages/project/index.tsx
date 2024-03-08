'use client'

import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import CreateAnIssue from '@components/app/create-issue'
import PageTop from '@components/app/page-top'
import { FadeContainer } from '@constants/FramerMotionVariants'
import projectData from '@content/projectData'
import ProjectCard from './project-card'

const ProjectPage = () => {
	if (!projectData.length) return <CreateAnIssue />

	return (
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
	)
}

export default ProjectPage
