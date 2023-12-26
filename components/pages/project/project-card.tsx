import OgImage from '@components/app/og-image'
import { IProjectType } from '@interfaces/project/project.interface'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { MdOutlineLink } from 'react-icons/md'

interface ProjectCardProps {
	project: IProjectType
}

const ProjectCard = ({ project }: ProjectCardProps) => (
	<div className='card'>
		<OgImage src={project.coverImage} alt={project.name} />

		<div className='flex flex-col justify-start gap-3'>
			<h1 className='font-bold text-neutral-900 dark:text-neutral-200'>{project.name}</h1>
			<p className='line-clamp-5 text-sm text-gray-400 dark:text-neutral-400'>{project.description}</p>

			<div className='flex flex-wrap items-center gap-1'>
				{project.tools!.map((tool, index) => {
					return (
						<span
							key={`${tool}-${index}`}
							className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-darkPrimary'
						>
							{tool}
						</span>
					)
				})}
			</div>

			<div className='mt-auto flex w-fit items-center gap-4 p-2'>
				{project.githubURL && (
					<Link
						href={project.githubURL}
						title='Source Code on GitHub'
						target={project.githubURL === '#' ? '_self' : '_blank'}
						rel='noopener noreferrer'
						className='text-gray-500 hover:text-black dark:hover:text-white'
					>
						<BsGithub className='h-6 w-6 transition-all hover:scale-110 active:scale-90' />
					</Link>
				)}

				{project.previewURL && (
					<Link
						href={project.previewURL}
						title='Live Preview'
						target={project.previewURL === '#' ? '_self' : '_blank'}
						rel='noopener noreferrer'
						className='text-gray-500 hover:text-black dark:hover:text-white'
					>
						<MdOutlineLink className='h-6 w-6 transition-all hover:scale-110 active:scale-90' />
					</Link>
				)}
			</div>
		</div>
	</div>
)

export default ProjectCard
