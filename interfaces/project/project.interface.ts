export interface IProjectType {
	id: string
	name: string
	coverImage: string
	description: string
	githubURL?: string
	previewURL?: string
	tools?: string[]
	pinned?: boolean
}
