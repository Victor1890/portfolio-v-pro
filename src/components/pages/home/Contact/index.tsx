import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { popUpFromBottomForText } from '@constants/FramerMotionVariants'
import AnimatedText from '@components/FramerMotion/AnimatedText'
import ContactForm from './ContactForm'

export default function Contact() {
	return (
		<div id='contact' className='!relative dark:bg-darkPrimary'>
			{/* Get in touch top section */}
			<section className='w-full-width pt-6 text-center dark:bg-darkPrimary dark:text-white'>
				<AnimatedText as='h2' variants={popUpFromBottomForText} className='text-4xl font-bold'>
					Get in touch
				</AnimatedText>

				<AnimatedText as='h3' variants={popUpFromBottomForText} className='px-4 py-2 font-medium dark:text-gray-300'>
					Is there something on your mind you'd like to talk about? Whether it's related to work or just a casual
					conversation, I am here and ready to listen. Please don't hesitate to reach out to me at any time. 🙋‍♂️.
				</AnimatedText>
			</section>

			{/* Wrapper Container */}
			<section className='mx-auto flex w-full flex-col px-5 dark:bg-darkPrimary dark:text-white lg:flex-row lg:pb-10'>
				{/* Left Contact form section */}
				<div className='mx-auto mt-10 w-full'>
					<AnimatedText as='h3' variants={popUpFromBottomForText} className='my-2 w-full text-center text-2xl font-bold'>
						Connect with me
					</AnimatedText>

					<ContactForm />
				</div>
			</section>
		</div>
	)
}
