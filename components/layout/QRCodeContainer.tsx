import QRCode from 'react-qr-code'
import Ripples from 'react-ripples'
import useWindowLocation from '@hooks/useWindowLocation'
import { CgClose } from 'react-icons/cg'
import { AnimatePresence, motion } from 'framer-motion'
import { useDarkMode } from '@context/darkModeContext'

interface QRCodeContainerProps {
	showQR: boolean
	setShowQR: (value: boolean) => void
}

export default function QRCodeContainer({ showQR, setShowQR }: QRCodeContainerProps) {
	const { currentURL } = useWindowLocation()
	const { isDarkMode } = useDarkMode()

	function downloadQRCode() {
		const svg = document.getElementById('QRCode')
		const svgData = new XMLSerializer().serializeToString(svg!)
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d')
		const img = new Image()
		img.onload = () => {
			canvas.width = img.width
			canvas.height = img.height
			ctx?.drawImage(img, 0, 0)
			const pngFile = canvas.toDataURL('image/png')
			const downloadLink = document.createElement('a')
			downloadLink.download = 'QRCode'
			downloadLink.href = `${pngFile}`
			downloadLink.click()
		}
		img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
	}
	return (
		<>
			<AnimatePresence>
				{showQR && (
					<motion.div
						initial='hidden'
						whileInView='visible'
						exit='hidden'
						variants={{
							hidden: { y: '100vh', opacity: 0 },
							visible: {
								y: 0,
								opacity: 1,
							},
						}}
						transition={{
							type: 'spring',
							bounce: 0.15,
						}}
						className='fixed inset-0 grid place-items-center bg-white dark:bg-darkSecondary'
						style={{ zIndex: 10000 }}
					>
						<button
							className='absolute right-5 top-5 text-black outline-none dark:text-white'
							onClick={() => setShowQR(false)}
						>
							<CgClose className='h-8 w-8' />
						</button>

						<div className='flex flex-col gap-2 text-black dark:text-white'>
							<h1 className='text-xl font-semibold'>Share this page</h1>
							<QRCode
								id='QRCode'
								value={currentURL}
								bgColor={isDarkMode ? '#25282a' : 'white'}
								fgColor={isDarkMode ? 'white' : '#25282a'}
							/>

							<Ripples
								placeholder={'download qr'}
								className='mt-2'
								color={isDarkMode ? 'rgba(0,0,0, 0.2)' : 'rgba(225, 225, 225, 0.2)'}
							>
								<button
									className='w-full rounded bg-darkPrimary px-3 py-2 text-sm font-medium text-white dark:bg-gray-100 dark:text-darkPrimary'
									onClick={downloadQRCode}
								>
									Download
								</button>
							</Ripples>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
