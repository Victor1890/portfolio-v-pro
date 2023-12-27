import { useDarkMode } from '@context/darkModeContext'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import ContributionsToolTip from './ContributionsToolTip'

const areaChartLoadingData = [
	{ shortDate: '09', contributionCount: 3 },
	{ shortDate: '10', contributionCount: 5 },
	{ shortDate: '11', contributionCount: 15 },
	{ shortDate: '12', contributionCount: 9 },
	{ shortDate: '13', contributionCount: 4 },
	{ shortDate: '14', contributionCount: 13 },
	{ shortDate: '15', contributionCount: 5 },
	{ shortDate: '16', contributionCount: 4 },
	{ shortDate: '17', contributionCount: 9 },
	{ shortDate: '18', contributionCount: 2 },
	{ shortDate: '19', contributionCount: 5 },
	{ shortDate: '21', contributionCount: 6 },
	{ shortDate: '22', contributionCount: 7 },
	{ shortDate: '23', contributionCount: 3 },
	{ shortDate: '24', contributionCount: 21 },
	{ shortDate: '25', contributionCount: 4 },
	{ shortDate: '26', contributionCount: 9 },
	{ shortDate: '27', contributionCount: 2 },
]

function LoadingAreaChart() {
	const { isDarkMode } = useDarkMode()

	return (
		<div className='pointer-events-none relative'>
			<div className='z-1 absolute inset-0 grid place-items-center text-base font-semibold sm:text-lg'>
				Loading Data...
			</div>
			<AreaChart
				width={730}
				height={250}
				data={areaChartLoadingData}
				margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				style={{
					opacity: '0.25',
				}}
			>
				<defs>
					<linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor={isDarkMode ? '#404040' : '#ababab'} stopOpacity={0.8} />
						<stop offset='95%' stopColor={isDarkMode ? '#404040' : '#ababab'} stopOpacity={0} />
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
					stroke={isDarkMode ? '#404040' : '#ababab'}
					fillOpacity={1}
					fill='url(#colorUv)'
				/>
			</AreaChart>
		</div>
	)
}

export default LoadingAreaChart
