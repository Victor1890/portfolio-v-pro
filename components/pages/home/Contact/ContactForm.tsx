import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useDarkMode } from '@context/darkModeContext'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FadeContainer, mobileNavItemSideways } from 'constants/FramerMotionVariants'
import Ripples from 'react-ripples'
import { useRef } from 'react'
import { FormInput } from '@interfaces/contact/contact.interface'
import config from '@config'

const {
	personName,
	implementations: { emailSdk },
} = config

const FailToastId = 'failed'

export default function Form() {
	const { isDarkMode } = useDarkMode()
	const sendButtonRef = useRef<HTMLButtonElement>(null!)
	const formRef = useRef<HTMLFormElement>(null!)

	function sendEmail(e: React.SyntheticEvent) {
		e.preventDefault()

		const target = e.target as typeof e.target & {
			first_name: { value: string }
			last_name: { value: string }
			email: { value: string }
			subject: { value: string }
			message: { value: string }
		}

		const emailData = {
			to_name: personName,
			first_name: target.first_name.value.trim(),
			last_name: target.last_name.value.trim(),
			email: target.email.value.trim(),
			subject: target.subject.value.trim(),
			message: target.message.value.trim(),
		}

		if (!validateForm(emailData) && !toast.isActive(FailToastId))
			return toast.error('Looks like you have not filled the form', {
				toastId: FailToastId,
			})

		// Making submit button disable
		sendButtonRef.current.setAttribute('disabled', 'true')

		// Creating a loading toast
		const toastId = toast.loading('Processing ⌛')

		emailjs
			.send(emailSdk.serviceId, emailSdk.templateId, emailData!, emailSdk.userId)
			.then(() => {
				formRef.current.reset()
				toast.update(toastId, {
					render: 'Message Sent ✌',
					type: 'success',
					isLoading: false,
					autoClose: 3000,
				})
				sendButtonRef.current.removeAttribute('disabled')
			})
			.catch((err) => {
				toast.update(toastId, {
					render: `😢 ${err.text}`,
					type: 'error',
					isLoading: false,
					autoClose: 3000,
				})
				sendButtonRef.current.removeAttribute('disabled')
			})
	}

	function validateForm(data: FormInput): boolean {
		for (const key in data) {
			if (data[key as keyof FormInput] === '') return false
		}
		return true
	}

	return (
		<>
			<motion.form
				ref={formRef}
				initial='hidden'
				whileInView='visible'
				variants={FadeContainer}
				viewport={{ once: true }}
				className='mx-auto my-10 flex w-full max-w-xl flex-col items-center dark:text-gray-300'
				onSubmit={sendEmail}
			>
				{/* First Name And Last Name */}
				<div className='grid w-full grid-cols-2 gap-6'>
					<motion.div variants={mobileNavItemSideways} className='group relative z-0 mb-6 w-full'>
						<input
							type='text'
							name='first_name'
							id='floating_first_name'
							className='text-white-900 peer mt-2 block w-full appearance-none border-0 border-b-2 border-slate-500 bg-transparent px-0 py-2 text-sm focus:border-black focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-white dark:focus:border-white'
							placeholder=' '
							required
						/>
						<label
							htmlFor='floating_first_name'
							className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white'
						>
							First name
						</label>
					</motion.div>
					<motion.div variants={mobileNavItemSideways} className='group relative z-0 mb-6 w-full'>
						<input
							type='text'
							name='last_name'
							id='floating_last_name'
							className='peer mt-2 block w-full appearance-none border-0 border-b-2 border-slate-500 bg-transparent px-0 py-2 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-white dark:focus:border-white'
							placeholder=' '
							required
						/>
						<label
							htmlFor='floating_last_name'
							className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white'
						>
							Last name
						</label>
					</motion.div>
				</div>
				<motion.div variants={mobileNavItemSideways} className='group relative z-0 mb-6 w-full'>
					<input
						type='email'
						name='email'
						id='floating_email'
						className='peer mt-2 block w-full appearance-none border-0 border-b-2 border-slate-500 bg-transparent px-0 py-2 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-white focus:dark:border-white'
						placeholder=' '
						required
					/>
					<label
						htmlFor='floating_email'
						className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white'
					>
						Email address
					</label>
				</motion.div>
				<motion.div variants={mobileNavItemSideways} className='group relative z-0 mb-6 w-full'>
					<input
						type='subject'
						name='subject'
						id='floating_subject'
						className='peer mt-2 block w-full appearance-none border-0 border-b-2 border-slate-500 bg-transparent px-0 py-2 text-sm text-gray-900 focus:border-black focus:outline-none focus:ring-0 dark:border-gray-400 dark:text-white dark:focus:border-white'
						placeholder=' '
						required
					/>
					<label
						htmlFor='floating_subject'
						className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white'
					>
						Subject
					</label>
				</motion.div>
				<motion.div variants={mobileNavItemSideways} className='group relative z-0 mb-6 w-full'>
					<textarea
						name='message'
						id='floating_message'
						className='peer mt-2 block min-h-[100px] w-full resize-y appearance-none border-0 border-b-2 border-slate-500 bg-transparent px-0 py-2 text-sm text-gray-900 focus:border-black focus:outline-none  focus:ring-0 dark:border-gray-400 dark:text-white dark:focus:border-white'
						placeholder=' '
						required
					/>
					<label
						htmlFor='floating_message'
						className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-slate-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-black dark:text-gray-400 dark:peer-focus:text-white'
					>
						Message
					</label>
				</motion.div>

				<motion.div
					variants={mobileNavItemSideways}
					className='w-full overflow-hidden rounded-lg shadow-lg sm:max-w-sm'
				>
					<Ripples placeholder={'Send'} className='flex w-full justify-center' color='rgba(225, 225,225,0.2)'>
						<button
							ref={sendButtonRef}
							type='submit'
							className='relative w-full overflow-hidden rounded-lg bg-neutral-800 px-4 py-3 text-center text-sm font-medium text-white outline-none transition duration-300 active:scale-95 disabled:opacity-50 disabled:active:scale-100 dark:bg-darkSecondary'
						>
							Send
						</button>
					</Ripples>
				</motion.div>
			</motion.form>
			<ToastContainer theme={isDarkMode ? 'dark' : 'light'} style={{ zIndex: 1000 }} />
		</>
	)
}
