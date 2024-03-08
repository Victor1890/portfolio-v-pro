import config from '@config'
import { ImageResponse } from 'next/og'

const { appUrl, personName } = config

export const runtime = 'edge'

const interBold = fetch(new URL('./../../../assets/fonts/Inter-Bold.ttf', import.meta.url)).then((res) =>
	res.arrayBuffer()
)
const logo = fetch(new URL('./../../../assets/open-graph/logo-64x64.png', import.meta.url)).then((res) =>
	res.arrayBuffer()
)
const icons = fetch(new URL('./../../../assets/open-graph/icons.png', import.meta.url)).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
	const fontBold = await interBold.catch(() => null)
	if (!fontBold) {
		console.error('failed to fetch font')
		return new Response('Internal Server Error', { status: 500 })
	}

	const { hostname } = new URL(appUrl)

	const url = new URL(req.url)

	const values = {
		heading: url.searchParams.get('heading') || 'Hello, World!',
		mode: url.searchParams.get('mode') || 'dark',
		type: url.searchParams.get('type') || 'Blog Post',
	}

	const heading = values.heading.length > 140 ? `${values.heading.substring(0, 140)}...` : values.heading

	const { mode } = values
	const paint = mode === 'dark' ? '#fff' : '#000'

	const fontSize = heading.length > 30 ? '70px' : '100px'

	const imageData = await logo.catch(() => null)
	if (!imageData) {
		console.error('failed to fetch image 1')
		return new Response('Internal Server Error', { status: 500 })
	}

	const image2Data = await icons.catch(() => null)
	if (!image2Data) {
		console.error('failed to fetch image 2')
		return new Response('Internal Server Error', { status: 500 })
	}

	return new ImageResponse(
		(
			<div
				tw='flex relative flex-col p-12 w-full h-full items-start'
				style={{
					color: paint,
					background: mode === 'dark' ? 'black' : 'white',
				}}
			>
				<div
					tw='flex leading-[1.1] font-bold tracking-tighter items-center'
					style={{
						fontFamily: 'Inter',
						fontWeight: 'bolder',
						marginLeft: '-3px',
						fontSize: '32px',
					}}
				>
					<img width='64' height='64' src={imageData as any} />
					<h1 tw='pl-4'>{personName}</h1>
				</div>

				<div tw='flex flex-col flex-1 '>
					<div
						tw='flex text-xl uppercase font-bold tracking-tight'
						style={{ fontFamily: 'Inter', fontWeight: 'normal' }}
					>
						{values.type}
					</div>
					<div
						tw='flex leading-[1.1] text-[80px] font-bold tracking-tighter'
						style={{
							fontFamily: 'Inter',
							fontWeight: 'bolder',
							marginLeft: '-3px',
							fontSize,
						}}
					>
						{heading}
					</div>
				</div>
				<div tw='flex items-center w-full justify-between'>
					<div tw='flex text-xl' style={{ fontFamily: 'Inter', fontWeight: 'normal' }}>
						{hostname}
					</div>
					<div tw='flex items-center text-xl' style={{ fontFamily: 'Inter', fontWeight: 'normal' }}>
						<img height='86' src={image2Data as any} />
					</div>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: 'Inter',
					data: fontBold,
					weight: 700,
					style: 'normal',
				},
			],
		}
	)
}
