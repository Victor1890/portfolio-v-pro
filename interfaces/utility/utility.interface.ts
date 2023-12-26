import { IconType } from 'react-icons/lib'

export interface IUtilityData {
	title: string
	data: {
		name: string
		description: string
		Icon: IconType | JSX.Element
		link: string
	}[]
}

export interface IUtility {
	title: string
	description: string
	lastUpdate: string
	data: IUtilityData[]
}
