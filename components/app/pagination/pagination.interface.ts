interface HandleChangePaginationI {
	(page: number): void
}
export interface PaginationPropsI {
	maxRowsPerPage?: number
	total?: number
	page?: number
	handleChange?: HandleChangePaginationI
}
