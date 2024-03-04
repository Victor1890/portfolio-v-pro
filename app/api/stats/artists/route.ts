import spotifyProvider from "@provider/spotify/spotify.provider";

export async function GET() {
    const topArtists = await spotifyProvider.getTopArtists().catch((e) => {
        console.error('spotifyProvider.getTopArtists error: ', e)
        return null
    })

    if (!topArtists) {
        return Response.json({ error: { message: 'Failed to fetch top artists' } }, {
            status: 500
        })
    }

    const artists = (topArtists.items || []).map((artist) => ({
        id: artist.id,
        name: artist.name,
        url: artist.external_urls.spotify,
        popularity: artist.popularity,
        coverImage: artist.images ? artist.images[1] : null,
    }))

    return Response.json(artists, {
        headers: {
            "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200"
        },
        status: 200
    })
}