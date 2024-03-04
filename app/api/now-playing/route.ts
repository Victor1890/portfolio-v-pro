import spotifyProvider from "@provider/spotify/spotify.provider"

export async function GET() {

    const res = Response

    const song = await spotifyProvider.getCurrentlyPlayingSong().catch(() => null)

    if (!song) {
        return res.json({ isPlaying: false }, {
            status: 200,
        });
    }

    const data = {
        album: song.item.album.name,
        albumImageUrl: song.item.album.images[0].url,
        artist: song.item.artists.map((artist) => artist.name).join(', '),
        isPlaying: song.is_playing,
        songUrl: song.item.external_urls.spotify,
        title: song.item.name,
    };

    return res.json(data, {
        status: 200,
        headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
        }
    });
}