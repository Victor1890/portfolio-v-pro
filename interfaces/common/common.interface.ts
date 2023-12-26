export type ITableOfContentMDX = {
	level: number
	id: string
	heading: string
}

export interface ITMDBDataI {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title?: string
	original_name?: string
	overview: string
	popularity: number
	poster_path: string
	release_date?: string
	first_air_date?: string
	title: string
	name?: string
	video: boolean
	vote_average: number
	vote_count: number
	rating?: number
}

export interface IEmailValidation {
	valid: boolean
	block: boolean
	disposable: boolean
	domain: string
	text: string
	reason: string
	risk: number
	mx_host: string
	possible_typo: any[]
	mx_ip: string
	mx_info: string
	last_changed_at: string
}

export interface IPagination {
	offset: number
	take: number
}
