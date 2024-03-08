'use client'

import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import CreateAnIssue from '@components/app/create-issue'
import PageTop from '@components/app/page-top'
import { popUpFromBottomForText } from '@constants/FramerMotionVariants'
import certificatesData from '@content/certificatesData'
import Image from 'next/image'
import Link from 'next/link'

const CertificatePage = () => {
	if (!certificatesData.length) return <CreateAnIssue />

	return (
		<section className='pageTop'>
			<PageTop pageTitle='Certificates'>
				I've participated in many contests, courses and test and get certified in many skills. You can find the
				certificates below.
			</PageTop>

			<div className='flex flex-col gap-3 font-inter'>
				{certificatesData.map((cer) => {
					return (
						<AnimatedDiv
							className='flex flex-col gap-2 rounded-lg bg-white p-3 shadow dark:bg-darkSecondary/50 md:flex-row md:items-center md:justify-between md:gap-4'
							variants={popUpFromBottomForText}
							key={cer.id}
						>
							<div className='flex items-center gap-3'>
								<div className='relative flex items-center justify-center'>
									{cer.orgLogo ? (
										<Image
											width={40}
											height={40}
											src={cer.orgLogo}
											alt={cer.orgName}
											title={`Organization ${cer.orgName}`}
											loading='lazy'
											quality={50}
											placeholder='blur'
											blurDataURL={cer.orgLogo}
											style={{
												objectFit: 'contain',
											}}
										/>
									) : (
										<div className='h-full w-full animate-pulse bg-white' />
									)}
								</div>
								<div className='flex flex-col '>
									{cer.title ? (
										<Link
											title={`Open Certificate in new tab - ${cer.title} by ${cer.orgName} on ${cer.issuedDate}`}
											href={cer.url || '#'}
											target={cer.url ? '_blank' : '_self'}
											className='text-sm font-semibold text-neutral-900 hover:underline dark:text-neutral-200 sm:text-base md:text-lg'
										>
											{cer.title}
										</Link>
									) : (
										<div className='h-4 w-full animate-pulse bg-white' />
									)}
									{cer.orgName ? (
										<p className='text-xs text-gray-500'>
											{cer.orgName} &#x2022; {cer.issuedDate}
										</p>
									) : (
										<div className='h-4 w-full animate-pulse bg-white' />
									)}
								</div>
							</div>
							<p className='text-sm text-gray-500'></p>
						</AnimatedDiv>
					)
				})}
			</div>
		</section>
	)
}

export default CertificatePage
