import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { AiOutlineSend } from 'react-icons/ai'
import { useDarkMode } from '@context/darkModeContext'
import { CgSpinnerTwo } from 'react-icons/cg'

export default function Newsletter() {
	const { isDarkMode } = useDarkMode()
	const [email, setEmail] = useState('')
	const [validationLoading, setValidationLoading] = useState(false)

	async function subscribeNewsLetter(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setValidationLoading(true)

		fetch('/api/validate/email', {
			method: 'POST',
			body: JSON.stringify({
				email,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.status === 'success' && res.valid === true) {
					try {
						fetch(process.env.NEXT_PUBLIC_EMAIL_LIST + email, {
							mode: 'no-cors',
						})
					} catch (error) {
						console.error(error)
					}
					toast.success('You have been added to my mailing list.')
					setEmail('')
				} else {
					toast.error('Please enter valid email address.')
				}
				setValidationLoading(false)
			})
			.catch((error) => {
				console.error(error)
				setValidationLoading(false)
			})
	}

	return (
		<>
			<div className='my-10 flex w-full flex-col gap-4 rounded-lg bg-white p-4 font-barlow ring-2 ring-gray-400 dark:border-neutral-600 dark:bg-black print:hidden'>
				<h2 className='!my-0 text-2xl font-bold dark:text-white'>Jatin's Newsletter</h2>
				<p className='!my-0 font-medium text-gray-600 dark:text-gray-300'>
					I write monthly Tech, Web Development and chrome extension that will improve your productivity. Trust me, I
					won't spam you.
				</p>

				<form className='relative w-full' onSubmit={subscribeNewsLetter}>
					<input
						className='w-full rounded-lg border-0 bg-gray-200 px-4 py-2.5 text-lg outline-none placeholder:text-gray-700 dark:bg-darkSecondary dark:text-gray-300 dark:placeholder:text-gray-400'
						type='email'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='example@email.com'
						required={true}
					/>

					<button
						className='absolute bottom-0 right-0 top-0 m-[3px] transform select-none rounded-md bg-white   px-4 font-inter font-medium duration-200 active:scale-90 dark:bg-neutral-600/40 dark:text-white'
						type='submit'
					>
						<div className='relative !my-0 flex items-center gap-2 sm:w-[100px]'>
							{validationLoading ? (
								<CgSpinnerTwo className='mx-auto animate-[spin_0.5s_linear_infinite] text-xl' />
							) : (
								<>
									<AiOutlineSend className='text-xl' />
									<p className='!my-0 hidden sm:inline-flex'>Subscribe</p>
								</>
							)}
						</div>
					</button>
				</form>
			</div>

			<ToastContainer theme={isDarkMode ? 'dark' : 'light'} style={{ zIndex: 1000 }} autoClose={3000} />
		</>
	)
}
