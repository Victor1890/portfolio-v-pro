'use client'

import Footer from "@components/app/footer"
import TopNavbar from "@components/app/nav-bar"
import NavigationEvents from "@components/app/navigation-events"
import QRCodeContainer from "@components/layout/QRCodeContainer"
import ScrollToTopButton from "@components/layout/ScrollToTopButton"
import { DarkModeProvider } from '@context/darkModeContext'
import { ReactNode, Suspense, useState } from "react"
import 'styles/globals.css'

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {

    const [showQR, setShowQR] = useState<boolean>(false)

    return (
        <html lang="en">
            <body>
                <DarkModeProvider>
                    <TopNavbar />
                    <main>{children}</main>
                    <Footer setShowQR={setShowQR} showQR={showQR} />
                    <ScrollToTopButton />
                    <QRCodeContainer showQR={showQR} setShowQR={setShowQR} />

                    <Suspense fallback={null}>
                        <NavigationEvents />
                    </Suspense>

                </DarkModeProvider>
            </body>
        </html>
    )
}

export default RootLayout