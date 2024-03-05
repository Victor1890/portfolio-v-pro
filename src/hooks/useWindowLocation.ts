import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

type URL = string

export default function useWindowLocation() {
	const [currentURL, setCurrentURL] = useState<URL>('')
	const pathname = usePathname()

	useEffect(() => {
		setCurrentURL(window.location.href)
	}, [pathname])

	return { currentURL }
}
