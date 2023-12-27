import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { opacityVariant } from '@content/FramerMotionVariants'
import { useDarkMode } from '@context/darkModeContext'
import fetcher from '@lib/fetcher'
import useSWR from 'swr'
import AnimatedHeading from '../FramerMotion/AnimatedHeading'
import AnimatedText from '../FramerMotion/AnimatedText'
import ContributionsToolTip from './ContributionsToolTip'
import ContributionCountByDayOfWeekToolTip from './ContributionCountByDayOfWeekToolTip'
import LoadingBarChart from './LoadingBarChart'
import LoadingAreaChart from './LoadingAreaChart'

export default function GitHubActivityGraph() {
	const { isDarkMode } = useDarkMode()
	const { data: githubActivity } = useSWR('/api/stats/github-contribution', fetcher)

	return (
		<>
			<div className='mb-10 max-w-full font-barlow'>
				<AnimatedHeading
					variants={opacityVariant}
					className='text-3xl font-bold capitalize text-neutral-900 sm:text-4xl dark:text-neutral-200'
				>
					GitHub Activity Graph
				</AnimatedHeading>
				<AnimatedText variants={opacityVariant} className='my-4 text-gray-700 dark:text-gray-300'>
					A dynamically generated activity graph to show my GitHub activities of last 31 days.
				</AnimatedText>
				<ResponsiveContainer width='100%' height={300}>
					{githubActivity?.contributions ? (
						<AreaChart
							width={730}
							height={250}
							data={githubActivity?.contributions}
							margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
						>
							<defs>
								<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='5%' stopColor={isDarkMode ? '#26a64160' : '#26a641'} stopOpacity={0.8} />
									<stop offset='95%' stopColor={isDarkMode ? '#26a64160' : '#26a641'} stopOpacity={0} />
								</linearGradient>
							</defs>
							<XAxis dataKey='shortDate' />
							<YAxis />
							<CartesianGrid strokeDasharray='2 3' stroke={isDarkMode ? '#ffffff20' : '#00000020'} />
							<Tooltip content={<ContributionsToolTip />} />
							<Area
								dot
								activeDot
								strokeWidth={3}
								type='monotone'
								dataKey='contributionCount'
								aria-label='count'
								stroke={isDarkMode ? '#26a641' : '#216e39'}
								fillOpacity={1}
								fill='url(#colorUv)'
							/>
						</AreaChart>
					) : (
						<LoadingAreaChart />
					)}
				</ResponsiveContainer>
			</div>
			<div className='mb-10 max-w-full font-barlow'>
				<AnimatedHeading
					variants={opacityVariant}
					className='text-3xl font-bold capitalize text-neutral-900 sm:text-4xl dark:text-neutral-200'
				>
					My Productivity by Day of the Week
				</AnimatedHeading>
				<AnimatedText variants={opacityVariant} className='my-4 text-gray-700 dark:text-gray-300'>
					A visual representation of my productivity based on the number of contributions made on each day of the week.
				</AnimatedText>
				<ResponsiveContainer width='100%' height={300}>
					{githubActivity?.contributionCountByDayOfWeek ? (
						<BarChart
							width={730}
							height={250}
							data={githubActivity?.contributionCountByDayOfWeek}
							margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
						>
							<CartesianGrid strokeDasharray='2 3' stroke={isDarkMode ? '#ffffff20' : '#00000020'} />
							<XAxis dataKey='day' />
							<YAxis />

							<Tooltip content={<ContributionCountByDayOfWeekToolTip />} />
							<Bar dataKey='count' fill='#26a641' />
						</BarChart>
					) : (
						<LoadingBarChart />
					)}
				</ResponsiveContainer>
			</div>
		</>
	)
}
