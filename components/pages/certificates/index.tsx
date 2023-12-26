import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import PageTop from '@components/PageTop'
import CreateAnIssue from '@components/app/create-issue'
import MetaData from '@components/app/meta/MetaData'
import { popUpFromBottomForText } from '@content/FramerMotionVariants'
import certificatesData from '@content/certificatesData'
import pageMeta from '@content/meta'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

const CertificatePage = () => {
	if (!certificatesData.length) return <CreateAnIssue />

	return (
		<Fragment>
			<MetaData
				title={pageMeta.certificates.title}
				description={pageMeta.certificates.description}
				previewImage={pageMeta.certificates.image}
				keywords={pageMeta.certificates.keywords}
			/>

			<section className='pageTop'>
				<PageTop pageTitle='Certificates'>
					I've participated in many contests, courses and test and get certified in many skills. You can find the
					certificates below.
				</PageTop>

				<div className='flex flex-col gap-3 font-inter'>
					{certificatesData.map((cer) => {
						return (
							<AnimatedDiv
								className='flex flex-col gap-2 rounded-lg bg-white p-3 shadow md:flex-row md:items-center md:justify-between md:gap-4 dark:bg-darkSecondary/50'
								variants={popUpFromBottomForText}
								key={cer.id}
							>
								<div className='flex items-center gap-3'>
									<div className='relative flex items-center justify-center'>
										<Image
											width={40}
											height={40}
											src={cer.orgLogo}
											alt={cer.orgName}
											quality={50}
											placeholder='blur'
											blurDataURL={cer.orgLogo}
											style={{
												objectFit: 'contain',
											}}
										/>
									</div>
									<div className='flex flex-col '>
										<Link
											href={cer.url || '#'}
											target={cer.url ? '_blank' : '_self'}
											className='text-sm font-semibold text-neutral-900 hover:underline sm:text-base md:text-lg dark:text-neutral-200'
										>
											{cer.title}
										</Link>
										<p className='text-xs text-gray-500'>
											{cer.orgName} &#x2022; {cer.issuedDate}
										</p>
									</div>
								</div>
								<p className='text-sm text-gray-500'></p>
							</AnimatedDiv>
						)
					})}
				</div>
			</section>
		</Fragment>
	)
}

export default CertificatePage
