import { getFormattedDate } from '@utils/date.util'
import { TooltipProps } from 'recharts'
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent'

const ContributionsToolTip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
	if (active && payload && payload.length) {
		return (
			<div className='w-fit max-w-[250px] rounded-md bg-white p-5 text-sm text-black shadow-lg dark:bg-darkSecondary dark:text-gray-200'>
				<p className='label'>
					<span className='font-medium'>Date :</span> {getFormattedDate(new Date(payload[0].payload.date))}
				</p>
				<p className='desc'>
					<span className='font-medium'>Commit Count :</span> {payload[0].value}
				</p>
			</div>
		)
	}

	return null
}

export default ContributionsToolTip
