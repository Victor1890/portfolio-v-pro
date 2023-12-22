import { NextApiRequest, NextApiResponse } from 'next'
import spotifyProvider from '@provider/spotify/spotify.provider'

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
	const topTracks = await spotifyProvider.getTopTracks().catch(() => null)
	if (!topTracks) {
		return res.status(500).json({ error: { message: 'Failed to fetch top tracks' } })
	}

	const tracks = (topTracks.items || []).map((track) => ({
		title: track.name,
		artist: track.artists.map((artist) => artist.name).join(', '),
		url: track.external_urls.spotify,
		coverImage: track.album.images[1],
	}))

	res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

	return res.status(200).json(tracks)
}
