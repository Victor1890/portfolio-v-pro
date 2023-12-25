import { useCallback, useState } from 'react'

export function usePagination<T>(data: Array<T>, offset = 1, take = 5) {
	const [paginationInfo, setPaginationInfo] = useState({ offset, take })

	const pagination = useCallback((list: Array<T>, size: number, pageNumber: number) => {
		return list?.slice((pageNumber - 1) * size, pageNumber * size)
	}, [])

	return {
		data: pagination(data, paginationInfo.take, paginationInfo.offset),
		setPaginationInfo,
		paginationInfo,
	}
}
