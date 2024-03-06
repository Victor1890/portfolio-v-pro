import { motion } from 'framer-motion'
import { AnimatedTAGProps } from '@interfaces/common/common.interface'

export default function AnimatedHeading({ variants, className, children, infinity, variant = 'h2' }: AnimatedTAGProps) {
	switch (variant) {
		case 'h1':
			return (
				<motion.h1
					initial='hidden'
					whileInView='visible'
					viewport={{ once: !infinity }}
					variants={variants}
					className={className}
				>
					{children}
				</motion.h1>
			)
			break
		case 'h2':
			return (
				<motion.h2
					initial='hidden'
					whileInView='visible'
					viewport={{ once: !infinity }}
					variants={variants}
					className={className}
				>
					{children}
				</motion.h2>
			)
			break
		case 'h3':
			return (
				<motion.h3
					initial='hidden'
					whileInView='visible'
					viewport={{ once: !infinity }}
					variants={variants}
					className={className}
				>
					{children}
				</motion.h3>
			)
			break
		case 'h4':
			return (
				<motion.h4
					initial='hidden'
					whileInView='visible'
					viewport={{ once: !infinity }}
					variants={variants}
					className={className}
				>
					{children}
				</motion.h4>
			)
			break
		case 'h5':
			return (
				<motion.h5
					initial='hidden'
					whileInView='visible'
					viewport={{ once: !infinity }}
					variants={variants}
					className={className}
				>
					{children}
				</motion.h5>
			)
			break
		case 'h6':
			return (
				<motion.h6
					initial='hidden'
					whileInView='visible'
					viewport={{ once: !infinity }}
					variants={variants}
					className={className}
				>
					{children}
				</motion.h6>
			)
			break
		default:
			;<motion.h1
				initial='hidden'
				whileInView='visible'
				viewport={{ once: !infinity }}
				variants={variants}
				className={className}
			>
				{children}
			</motion.h1>
			break
	}
}
