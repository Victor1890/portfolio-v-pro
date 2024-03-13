'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import { useEffect } from 'react'

NProgress.configure({
	easing: 'ease',
	speed: 800,
	showSpinner: false,
})

const NavigationEvents = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	useEffect(() => {
		NProgress.start()

		return () => {
			NProgress.done()
		}
	}, [pathname, searchParams])

	return null
}

export default NavigationEvents
