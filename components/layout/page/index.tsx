import React, { useState } from 'react'
import TopNavbar from '../TopNavbar'
import ScrollToTopButton from '../ScrollToTopButton'
import Footer from '@components/app/footer'
import QRCodeContainer from '@components/layout/QRCodeContainer'

export default function Layout({ children }: { children: React.ReactNode }) {
	const [showQR, setShowQR] = useState(false)
	return (
		<>
			<TopNavbar />
			<main>{children}</main>
			<Footer setShowQR={setShowQR} showQR={showQR} />
			<ScrollToTopButton />
			<QRCodeContainer showQR={showQR} setShowQR={setShowQR} />
		</>
	)
}
