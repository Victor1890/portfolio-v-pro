import 'react-toastify/dist/ReactToastify.css'

import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'
import { FiCopy, FiLinkedin } from 'react-icons/fi'
import { GrFacebookOption, GrTwitter } from 'react-icons/gr'

import { BsThreeDots } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import { toast } from 'react-toastify'
import useShare from '../../hooks/useShare'

type Props = {
	className: string
	title: string
	url: string
	summary: string
	cover_image: string
	children: React.ReactNode
}

export default function ShareOnSocialMedia({ className, title, url, summary, cover_image, children }: Props) {
	const { isShareSupported } = useShare()

	async function handleShare() {
		const blob = await fetch(cover_image).then((res) => res.blob())
		const file = new File([blob], 'image.png', { type: 'image/png' })
		if (window.navigator.share) {
			window.navigator
				.share({
					title: title,
					text: summary,
					url: url,
					files: [file],
				})
				.then(() => {
					console.log('Thanks for sharing!')
				})
				.catch(console.error)
		}
	}

	// copy to clipboard functions
	function copyTextToClipboard(text: string) {
		if (!navigator.clipboard) {
			toast.error("Sorry, Your device doesn't supports This feature. Please Change your device ✌️ ")
			return
		}
		navigator.clipboard.writeText(text).then(
			function () {
				toast.success('Link Copied Successfully 🙌')
			},
			function (err) {
				console.error(err)
				toast.success("Something Went wrong I don't know what 🤔 use other methods")
			}
		)
	}

	return (
		<>
			<div className={`${className} my-5 transform sm:scale-150`}>
				<FacebookShareButton placeholder={'Shared'} quote={title} url={url}>
					<div className='rounded-full bg-gray-700 p-2 text-white'>
						<GrFacebookOption className='h-4 w-4' />
					</div>
				</FacebookShareButton>
				<TwitterShareButton placeholder={'Shared'} title={title} url={url} related={['@Victor_R1890']}>
					<div className='rounded-full bg-gray-700 p-2 text-white'>
						<GrTwitter className='h-4 w-4' />
					</div>
				</TwitterShareButton>
				<LinkedinShareButton placeholder={'Shared'} title={title} summary={summary} url={url} source={url}>
					<div className='rounded-full bg-gray-700 p-2 text-white'>
						<FiLinkedin className='h-4 w-4 ' />
					</div>
				</LinkedinShareButton>
				<WhatsappShareButton placeholder={'Shared'} title={title} url={url}>
					<div className='rounded-full bg-gray-700 p-1.5 text-white'>
						<FaWhatsapp className='h-5 w-5 ' />
					</div>
				</WhatsappShareButton>
				<div className='cursor-pointer rounded-full bg-gray-700 p-2 text-white'>
					<FiCopy className='h-4 w-4 ' onClick={() => copyTextToClipboard(url)} />
				</div>

				{/* children of components */}
				{children}

				{isShareSupported && (
					<div className='cursor-pointer rounded-full bg-gray-700 p-2 text-white' onClick={handleShare}>
						<BsThreeDots className='h-4 w-4' />
					</div>
				)}
			</div>
		</>
	)
}
