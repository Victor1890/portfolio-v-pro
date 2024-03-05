import { IconType } from 'react-icons/lib'

export type SpotifyTrackType = {
	id: number
	title: string
	url: string
	coverImage: {
		url: string
	}
	artist: string
}

export type SpotifyArtistType = {
	id: number
	name: string
	url: string
	coverImage: {
		url: string
	}
	popularity: number
}

export interface ISocialPlatform {
	title: string
	Icon: IconType
	url: string
}
