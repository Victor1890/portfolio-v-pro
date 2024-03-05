import { AnimatedTAGProps } from '@interfaces/common/common.interface'
import { motion } from 'framer-motion'

export default function AnimatedText({ variants, className, children, infinity }: AnimatedTAGProps) {
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
