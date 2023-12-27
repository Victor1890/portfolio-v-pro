import { TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const ContributionCountByDayOfWeekToolTip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div className='w-fit max-w-[250px] rounded-md bg-white p-5 text-sm text-black shadow-lg dark:bg-darkSecondary dark:text-gray-200'>
				<p className='label'>
					<span className='font-medium'>Day :</span> {payload[0].payload.day}
				</p>
				<p className='desc'>
					<span className='font-medium'>Commit Count :</span> {payload[0].value}
				</p>
			</div>
		)
	}

	return null
}

export default ContributionCountByDayOfWeekToolTip
