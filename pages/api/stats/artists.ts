import { NextApiRequest, NextApiResponse } from "next";
import spotifyProvider from "@provider/spotify/spotify.provider";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {

  const topArtists = await spotifyProvider.getTopArtists().catch(e => {
    console.error("spotifyProvider.getTopArtists error: ", e)
    return null
  })

  if (!topArtists) {
    return res.status(500).json({ error: { message: "Failed to fetch top artists" } });
  }

  const artists = (topArtists.items || []).map((artist) => ({
    id: artist.id,
    name: artist.name,
    url: artist.external_urls.spotify,
    popularity: artist.popularity,
    coverImage: artist.images ? artist.images[1] : null,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json(artists);
}
