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
	certificates: PageData
	projects: PageData
	about: PageData
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
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
