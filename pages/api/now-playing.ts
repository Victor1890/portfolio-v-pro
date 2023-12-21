import { NextApiRequest, NextApiResponse } from "next";
import spotifyProvider from "@provider/spotify/spotify.provider";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {

  const song = await spotifyProvider.getCurrentlyPlayingSong().catch(() => null)

  if (!song) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
