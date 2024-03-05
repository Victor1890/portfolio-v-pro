import { useDarkMode } from '@context/darkModeContext'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import ContributionCountByDayOfWeekToolTip from './ContributionCountByDayOfWeekToolTip'

const barGraphLoadingData = [
	{ day: 'Monday', count: 3 },
	{ day: 'Tuesday', count: 5 },
	{ day: 'Wednesday', count: 7 },
	{ day: 'Thursday', count: 9 },
	{ day: 'Friday', count: 11 },
	{ day: 'Saturday', count: 13 },
	{ day: 'Sunday', count: 15 },
]

function LoadingBarChart() {
	const { isDarkMode } = useDarkMode()

	return (
		<div className='pointer-events-none relative'>
			<div className='z-1 absolute inset-0 grid place-items-center text-base font-semibold sm:text-lg'>
				Loading Data...
			</div>
			<BarChart
				width={730}
				height={250}
				data={barGraphLoadingData}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				style={{
					opacity: '0.25',
				}}
			>
				<CartesianGrid strokeDasharray='2 3' stroke={isDarkMode ? '#ffffff20' : '#00000020'} />
				<XAxis dataKey='day' />
				<YAxis />

				<Tooltip cursor={{ fill: 'transparent' }} content={<ContributionCountByDayOfWeekToolTip />} />
				<Bar dataKey='count' fill={isDarkMode ? '#404040' : '#ababab'} />
			</BarChart>
		</div>
	)
}

export default LoadingBarChart
