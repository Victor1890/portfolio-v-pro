import config from '@config'
import Base from '@provider/base'
import {
	GetTopArtistResponse,
	GetTopTrackResponse,
	ISpotifyAccessToken,
	ISpotifyCurrentlyPlaying,
} from './spotify.interface'

const { spotify } = config

class SpotifyProvider extends Base {
	private refresh_token: string
	private tokenExpiresAt: Date

	constructor() {
		super(spotify.api)
		this.refresh_token = ''
		this.tokenExpiresAt = new Date()
	}

	private async getAccessToken(): Promise<ISpotifyAccessToken | null> {
		const { apiToken, clientId, clientSecret, refreshToken } = spotify

		if (this.tokenExpiresAt && new Date(Date.now() + 5 * 60 * 1000) > this.tokenExpiresAt) {
			const response: ISpotifyAccessToken = await fetch(apiToken, {
				method: 'POST',
				headers: {
					Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					grant_type: 'refresh_token',
					refresh_token: refreshToken,
				}),
			})
				.then((res) => res.json())
				.catch((e) => {
					console.error('getAccessToken fetch error: ', e)
					return null
				})

			if (!response) {
				return null
			}
			const tokenExpiresAt = new Date(Date.now() + response.expires_in * 1000)

			this.refresh_token = response.access_token
			this.tokenExpiresAt = tokenExpiresAt

			return response
		}

		return {
			access_token: this.refresh_token,
			expires_in: this.tokenExpiresAt.getHours() - new Date().getHours(),
		}
	}

	public async getTopTracks(limit = 10): Promise<GetTopTrackResponse> {
		await this.getAccessToken()
		return this.get(
			`/v1/me/top/tracks?limit=${limit}&time_range=short_term`,
			{},
			{
				headers: {
					Authorization: `Bearer ${this.refresh_token}`,
				}
			}
		)
	}

	public async getTopArtists(limit = 5): Promise<GetTopArtistResponse> {
		await this.getAccessToken()
		return this.get(
			`/v1/me/top/artists?limit=${limit}&time_range=short_term`,
			{},
			{
				headers: {
					Authorization: `Bearer ${this.refresh_token}`,
				}
			}
		)
	}

	public async getCurrentlyPlayingSong(): Promise<ISpotifyCurrentlyPlaying> {
		await this.getAccessToken()
		return this.get(
			`/v1/me/player/currently-playing`,
			{},
			{
				headers: {
					Authorization: `Bearer ${this.refresh_token}`,
				}
			}
		)
	}
}

const spotifyProvider = new SpotifyProvider()

export default spotifyProvider
