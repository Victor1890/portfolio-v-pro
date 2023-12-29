import { Variants } from 'framer-motion'
import { ReadTimeResults } from 'reading-time'

export type ITableOfContentMDX = {
	level: number
	id: string
	heading: string
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

export type PageData = {
	title: string
	description: string
	image: string
	keywords: string
}

export type PageMeta = {
	home: PageData
	stats: PageData
	utilities: PageData
	blogs: PageData
	bookmark: PageData
	certificates: PageData
	projects: PageData
	about: PageData
	snippets: PageData
}

export type FrontMatter = {
	slug: string
	readingTime: ReadTimeResults
	excerpt: string
	title: string
	date: string
	keywords: string
	image: string
	org?: string | null
}

export type AnimatedTAGProps = {
	variants: Variants
	className?: string
	children: React.ReactNode
	infinity?: boolean
}
