'use client'

import { usePathname, useSearchParams, } from 'next/navigation'
import NProgress from 'nprogress'
import { useEffect } from "react"

NProgress.configure({
    easing: 'ease',
    speed: 800,
    showSpinner: false,
})

const NavigationEvents = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    // useEffect(() => {
    //     const start = () => {
    //         NProgress.start()
    //     }
    //     const end = () => {
    //         NProgress.done()
    //     }
    //     router.events.on('routeChangeStart', start)
    //     router.events.on('routeChangeComplete', end)
    //     router.events.on('routeChangeError', end)
    //     return () => {
    //         router.events.off('routeChangeStart', start)
    //         router.events.off('routeChangeComplete', end)
    //         router.events.off('routeChangeError', end)
    //     }
    // }, [router.events])

    useEffect(() => {

        NProgress.start()

        return () => {
            NProgress.done()
        }

    }, [pathname, searchParams])

    return null
}

export default NavigationEvents
