import { popUp } from 'constants/FramerMotionVariants'
import { motion } from 'framer-motion'

interface HamBurgerProps {
    open: boolean
    handleClick: () => void
}

function HamBurger({ open, handleClick }: HamBurgerProps) {
    return (
        <motion.div style={{ zIndex: 1000 }} initial='hidden' animate='visible' variants={popUp} className='sm:hidden'>
            {!open ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50'
                    onClick={handleClick}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 transform cursor-pointer select-none rounded-md duration-300 active:scale-50'
                    onClick={handleClick}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
            )}
        </motion.div>
    )
}

export default HamBurger