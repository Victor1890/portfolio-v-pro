'use client'

import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import StaticPage from '@components/app/static-page'
import { FadeContainer, opacityVariant } from 'constants/FramerMotionVariants'
import { linkedinData } from '@content/linkedinData'
import pageMeta from '@content/meta'
import { IStaticInfo } from '@interfaces/about/about.interface'
import { months } from '@utils/date.util'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Fragment } from 'react'

interface AboutPageProps {
	about: IStaticInfo
}

const AboutPage = ({ about }: AboutPageProps) => (
	<Fragment>
		<StaticPage metadata={pageMeta.about} page={about} />

		<div className='pageTop mt-0 print:hidden'>
			<motion.h3
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={opacityVariant}
				className='my-2 text-left text-xl font-bold md:text-3xl'
			>
				Recent Experience
			</motion.h3>

			<AnimatedDiv variants={FadeContainer} className='flex flex-col gap-2 overflow-x-scroll pb-5 pt-10 md:gap-4'>
				{linkedinData.experiences.map((experience) => {
					return (
						<div
							key={experience.company_linkedin_profile_url}
							className='flex-start xs:flex-row flex flex-col gap-3 rounded-lg bg-white p-5 shadow dark:bg-darkSecondary'
						>
							<div className='relative mt-1 h-14 w-14 min-w-[56px] max-w-[56px]'>
								<Image
									src={experience.logo_url}
									width={400}
									height={400}
									className='object-cover'
									alt={experience.company}
								/>
							</div>

							<div
								className={classNames(
									'flex flex-grow flex-col gap-2',
									experience.job_titles.length > 1 ? 'ml-10' : 'ml-0'
								)}
							>
								{experience.job_titles.length > 1 && (
									<h2
										className={classNames(
											'text-xl font-semibold',
											experience.job_titles.length > 1 ? '-ml-10' : 'ml-0'
										)}
									>
										{experience.company}
									</h2>
								)}
								{experience.job_titles.map((job) => (
									<div key={job.title} className='group relative w-full'>
										{experience.job_titles.length > 1 && (
											<span className='absolute -left-[29px] top-5 h-full w-0.5 bg-black group-last:opacity-0 peer-last:opacity-0 dark:bg-gray-500'></span>
										)}
										<div className={'flex flex-col items-start sm:flex-row sm:justify-between'}>
											<div className='flex flex-col'>
												<h3 className='relative text-lg font-semibold'>
													{job.title}

													{experience.job_titles.length > 1 && (
														<span className='absolute -left-[31.5px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white ring-[3px] ring-black dark:bg-gray-500 dark:ring-white'></span>
													)}
												</h3>
												{experience.job_titles.length === 1 && <p className='text-base'>{experience.company}</p>}
											</div>
											<div>
												<div className='flex items-center gap-1 text-sm'>
													<span>
														{months[job.starts_at.month - 1]} {job.starts_at.year}
													</span>
													<span> - </span>
													<span>
														{!job.ends_at ? (
															'Present'
														) : (
															<>
																{months[job.ends_at.month - 1]} {job.ends_at.year}
															</>
														)}
													</span>
												</div>
											</div>
										</div>

										{job.description && (
											<p className='mt-2 whitespace-pre-wrap text-sm text-black/80 dark:text-white/50'>
												{job.description}
											</p>
										)}
									</div>
								))}
							</div>
						</div>
					)
				})}
			</AnimatedDiv>
		</div>
	</Fragment>
)

export default AboutPage
