import '@styles/globals.css'
import 'nprogress/nprogress.css'
import Layout from '@components/layout/page'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { DarkModeProvider } from '@context/darkModeContext'
import { AppProps } from 'next/app'

NProgress.configure({
	easing: 'ease',
	speed: 800,
	showSpinner: false,
})

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const start = () => {
			NProgress.start()
		}
		const end = () => {
			NProgress.done()
		}
		router.events.on('routeChangeStart', start)
		router.events.on('routeChangeComplete', end)
		router.events.on('routeChangeError', end)
		return () => {
			router.events.off('routeChangeStart', start)
			router.events.off('routeChangeComplete', end)
			router.events.off('routeChangeError', end)
		}
	}, [router.events])

	return (
		<DarkModeProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</DarkModeProvider>
	)
}

export default MyApp
