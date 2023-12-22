export interface ILinkedinResponse {
	public_identifier?: string
	profile_pic_url?: string
	background_cover_image_url?: string
	first_name?: string
	last_name?: string
	full_name?: string
	follower_count?: number
	occupation?: string
	headline?: string
	summary?: string
	country?: string
	country_full_name?: string
	city?: string
	state?: string
	experiences: ILinkedInExperience[]
	education?: ILinkedInEducation[]
	languages?: string[]
	accomplishment_organisations?: any[]
	accomplishment_publications?: any[]
	accomplishment_honors_awards?: any[]
	accomplishment_patents?: any[]
	accomplishment_courses?: any[]
	accomplishment_projects?: any[]
	accomplishment_test_scores?: any[]
	volunteer_work?: ILinkedInVolunteerWork[]
	certifications?: ILinkedInCertification[]
	connections?: any
	recommendations?: any[]
	activities?: any[]
	articles?: any[]
	groups?: any[]
	phone_numbers?: any[]
	social_networking_services?: any[]
	skills?: string[]
	gender?: any
	birth_date?: any
	industry?: any
	interests?: any[]
	personal_emails?: any[]
	personal_numbers?: any[]
}

export interface ILinkedInExperience {
	company: string
	company_linkedin_profile_url: string
	logo_url: string
	job_titles: {
		starts_at: ILinkedInStartsAt
		ends_at?: ILinkedInEndsAt
		title: string
		description?: string
	}[]
}

export interface ILinkedInStartsAt {
	day: number
	month: number
	year: number
}

export interface ILinkedInEndsAt {
	day: number
	month: number
	year: number
}

export interface ILinkedInEducation {
	starts_at: ILinkedInStartsAt
	ends_at: ILinkedInEndsAt
	field_of_study: string
	degree_name: string
	school: string
	school_linkedin_profile_url: any
	description: any
	logo_url: string
	grade: any
	activities_and_societies: any
}

export interface ILinkedInVolunteerWork {
	starts_at: ILinkedInStartsAt
	ends_at: ILinkedInEndsAt
	title: string
	cause: string
	company: string
	company_linkedin_profile_url: string
	description?: string
	logo_url: string
}

export interface ILinkedInCertification {
	starts_at: ILinkedInStartsAt
	ends_at: ILinkedInEndsAt
	name: string
	license_number?: string
	display_source: string
	authority: string
	url: string
}
