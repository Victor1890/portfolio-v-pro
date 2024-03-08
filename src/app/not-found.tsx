import PageNotFoundPage from '@components/pages/404'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '404 - Page Not Found',
	description: 'You are lost in Space !!!',
}

const PageNotFound = () => <PageNotFoundPage />

export default PageNotFound
