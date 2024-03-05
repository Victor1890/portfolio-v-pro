import { memo, useMemo } from 'react'
import ReactPaginate from 'react-paginate'
import { motion } from 'framer-motion'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { PaginationPropsI } from './pagination.interface'

function Pagination({ handleChange, maxRowsPerPage = 10, page = 0, total = 10 }: PaginationPropsI) {
	const showNextButton = useMemo(() => page !== maxRowsPerPage - 1, [page, maxRowsPerPage])
	const showPrevButton = useMemo(() => page !== 0, [page])

	return (
		<motion.div
			variants={{
				hidden: {
					opacity: 0,
					y: 200,
				},
				visible: {
					opacity: 1,
					y: 0,
					transition: {
						type: 'spring',
						stiffness: 260,
						damping: 20,
						duration: 2,
					},
				},
			}}
			initial='hidden'
			animate='visible'
		>
			<ReactPaginate
				breakLabel={<span className='mr-4'>...</span>}
				nextLabel={
					showNextButton ? (
						<span className='bg-red bg-lightGray mr-4 flex h-10 w-10 items-center justify-center rounded-md text-darkPrimary dark:text-white'>
							<BsChevronRight />
						</span>
					) : null
				}
				onPageChange={({ selected }) => handleChange?.(selected)}
				pageRangeDisplayed={3}
				pageCount={Math.ceil(total / maxRowsPerPage)}
				previousLabel={
					showPrevButton ? (
						<span className='bg-red bg-lightGray mr-4 flex h-10 w-10 items-center justify-center rounded-md text-darkPrimary dark:text-white'>
							<BsChevronLeft />
						</span>
					) : null
				}
				containerClassName='flex bg-red items-center justify-center mt-8 mb-4'
				pageClassName='block border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4'
				activeClassName='text-darkPrimary dark:text-white dark:hover:bg-neutral-700/5 bg-white dark:bg-darkSecondary shadow-md'
			/>
		</motion.div>
	)
}

export default memo(Pagination)
