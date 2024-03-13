import config from '@config'
import {} from 'next/headers'

const { appUrl } = config

export async function POST(req: Request) {
	const origin = req.headers.get('origin')
	const host = req.headers.get('host')

	console.log({
		origin,
		host,
	})

	// req.body
	const { email } = await req.json()

	const url = 'https://mailcheck.p.rapidapi.com/?domain=' + email
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': process.env.EMAIL_VALIDATION_API!,
			'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com',
		},
	}

	const response = await fetch(url, options)

	if (response.status !== 200) {
		return new Response('Unable to process your request right now. Please try again later.', {
			status: 400,
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}

	const { valid, disposable } = await response.json()

	return new Response(
		JSON.stringify({
			status: 'success',
			message: 'Email is deliverable.',
			valid: valid && !disposable,
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': appUrl,
			},
		}
	)
}
