export interface ISpotifyAccessToken {
	access_token: string
	expires_in: number
}

export interface GetTopTrackResponse {
	items: ITracksAPIResponse[]
}

export interface ITracksAPIResponse {
	album: ISpotifyAlbum
	artists: ISpotifyAlbum[]
	available_markets: string[]
	disc_number: number
	duration_ms: number
	explicit: boolean
	external_urls: IExternalUrls
	href: string
	id: string
	is_local: boolean
	name: string
	popularity: number
	preview_url?: string
	track_number: number
	type: string
	uri: string
}

export interface ISpotifyAlbum {
	album_type: string
	artists: ISpotifyAlbum[]
	available_markets: string[]
	external_urls: IExternalUrls
	href: string
	id: string
	images: IImagesEntity[]
	name: string
	release_date: string
	release_date_precision: string
	total_tracks: number
	type: string
	uri: string
}

export interface IExternalUrls {
	spotify: string
}

export interface IImagesEntity {
	height: number
	url: string
	width: number
}

export interface GetTopArtistResponse {
	items: IArtistsAPIResponse[]
}

export interface IArtistsAPIResponse {
	external_urls: IExternalUrls
	followers: ISpotifyFollowers
	genres?: string[] | null
	href: string
	id: string
	images?: IImagesEntity[] | null
	name: string
	popularity: number
	type: string
	uri: string
}

export interface ISpotifyFollowers {
	href?: null
	total: number
}

export interface ISpotifyCurrentlyPlaying {
	repeat_state: string
	shuffle_state: boolean
	context: ISpotifyContext
	timestamp: number
	progress_ms: number
	is_playing: boolean
	item: ISpotifyItem
	currently_playing_type: string
	actions: ISpotifyActions
}

export interface ISpotifyContext {
	type: string
	href: string
	external_urls: ISpotifyExternalUrls
	uri: string
}

export interface ISpotifyExternalUrls {
	spotify: string
}

export interface ISpotifyItem {
	album: Album
	artists: ISpotifyArtist[]
	available_markets: string[]
	disc_number: number
	duration_ms: number
	explicit: boolean
	external_ids: ISpotifyExternalIds
	external_urls: ISpotifyExternalUrls
	href: string
	id: string
	is_playable: boolean
	linked_from: ISpotifyLinkedFrom
	restrictions: ISpotifyRestrictions
	name: string
	popularity: number
	preview_url: string
	track_number: number
	type: string
	uri: string
	is_local: boolean
}

export interface Album {
	album_type: string
	total_tracks: number
	available_markets: string[]
	external_urls: ISpotifyExternalUrls
	href: string
	id: string
	images: ISpotifyImage[]
	name: string
	release_date: string
	release_date_precision: string
	restrictions: ISpotifyRestrictions
	type: string
	uri: string
	artists: ISpotifyArtist[]
}

export interface ISpotifyImage {
	url: string
	height: number
	width: number
}

export interface ISpotifyRestrictions {
	reason: string
}

export interface ISpotifyArtist {
	external_urls: ISpotifyExternalUrls
	followers: ISpotifyFollowers
	genres: string[]
	href: string
	id: string
	images: ISpotifyImage[]
	name: string
	popularity: number
	type: string
	uri: string
}

export interface ISpotifyExternalIds {
	isrc: string
	ean: string
	upc: string
}

export interface ISpotifyLinkedFrom {}

export interface ISpotifyActions {
	interrupting_playback: boolean
	pausing: boolean
	resuming: boolean
	seeking: boolean
	skipping_next: boolean
	skipping_prev: boolean
	toggling_repeat_context: boolean
	toggling_shuffle: boolean
	toggling_repeat_track: boolean
	transferring_playback: boolean
}
