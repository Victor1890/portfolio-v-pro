import { AnimatedTAGProps } from '@interfaces/common/common.interface'
import { motion } from 'framer-motion'

export default function AnimatedText({ variants, className, children, infinity, as = 'p' }: AnimatedTAGProps) {
	if (as === 'h1') {
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
	}
	if (as === 'h2') {
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
	}
	if (as === 'h3') {
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
	}
	if (as === 'h4') {
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
	}
	if (as === 'h5') {
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
	}
	if (as === 'h6') {
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
	}
	if (as === 'p') {
		return (
			<motion.p
				initial='hidden'
				whileInView='visible'
				viewport={{ once: !infinity }}
				variants={variants}
				className={className}
			>
				{children}
			</motion.p>
		)
	}
	if (as === 'span') {
		return (
			<motion.span
				initial='hidden'
				whileInView='visible'
				viewport={{ once: !infinity }}
				variants={variants}
				className={className}
			>
				{children}
			</motion.span>
		)
	}

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
}
