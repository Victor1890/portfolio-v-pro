import spotifyProvider from "@provider/spotify/spotify.provider"

export async function GET() {

    const res = Response

    const topTracks = await spotifyProvider.getTopTracks().catch(() => null)

    if (!topTracks) {
        return res.json({ error: { message: 'Failed to fetch top tracks' } }, {
            status: 500
        })
    }

    const tracks = (topTracks.items || []).map((track) => ({
        title: track.name,
        artist: track.artists.map((artist) => artist.name).join(', '),
        url: track.external_urls.spotify,
        coverImage: track.album.images[1],
    }))

    return res.json(tracks, {
        status: 200,
        headers: {
            'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
        }
    })
}