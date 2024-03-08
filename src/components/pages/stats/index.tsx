'use client'

import AnimatedDiv from '@components/FramerMotion/AnimatedDiv'
import AnimatedText from '@components/FramerMotion/AnimatedText'
import PageTop from '@components/app/page-top'
import GitHubActivityGraph from '@components/github/GitHubActivityGraph'
import SpotifyArtist from '@components/spotify/Artist'
import SpotifyLoadingArtists from '@components/spotify/LoadingArtist'
import SpotifyLoadingSongs from '@components/spotify/LoadingSong'
import SpotifyTrack from '@components/spotify/Track'
import { FadeContainer, opacityVariant } from '@constants/FramerMotionVariants'
import { SpotifyArtistType, SpotifyTrackType } from '@interfaces/spotify/spotify.interface'
import { IStats } from '@interfaces/stats/stats.interface'
import fetcher from '@lib/fetcher'
import { useMemo } from 'react'
import useSWR from 'swr'
import StatsCard from './StatsCard'

const StatPage = () => {
	const { data: topTracks, isLoading: isTopTrackLoading } = useSWR('/api/stats/tracks', fetcher)
	const { data: artists, isLoading: isArtistLoading } = useSWR('/api/stats/artists', fetcher)
	const { data: devto } = useSWR('/api/stats/devto', fetcher)
	const { data: github } = useSWR('/api/stats/github', fetcher)

	const isTopTrackArray = useMemo(() => Array.isArray(topTracks), [topTracks])
	const isArtistArray = useMemo(() => Array.isArray(artists), [artists])

	const stats: IStats[] = useMemo(() => {
		return [
			{
				title: 'Total Posts',
				value: devto?.posts.toLocaleString(),
			},
			{
				title: 'Blog Followers',
				value: devto?.followers.toLocaleString(),
			},
			{
				title: 'Blog Reactions',
				value: devto?.likes.toLocaleString(),
			},
			{
				title: 'Blog Views',
				value: devto?.views.toLocaleString(),
			},
			{
				title: 'Blog Comments',
				value: devto?.comments.toLocaleString(),
			},
			{
				title: 'GitHub Repos',
				value: github?.repos,
			},
			{
				title: 'GitHub Gists',
				value: github?.gists,
			},
			{
				title: 'GitHub Followers',
				value: github?.followers,
			},
			{
				title: 'GitHub Stars',
				value: github?.githubStars,
			},
			// {
			// 	title: 'GitHub Forked',
			// 	value: github?.forks,
			// },
		]
	}, [devto, github])

	return (
		<section className='pageTop font-inter'>
			<PageTop pageTitle='Statistics'>
				These are my personal statistics about my Dev.to Blogs, Github and Top Streamed Music on Spotify.
			</PageTop>

			{/* Blogs and github stats */}
			<AnimatedDiv className='xs:grid-cols-2 my-10 grid gap-5 sm:!grid-cols-3 xl:!grid-cols-4' variants={FadeContainer}>
				{stats.map((stat, index) => (
					<StatsCard key={index} title={stat.title} value={stat.value} />
				))}
			</AnimatedDiv>

			<GitHubActivityGraph />

			{/* Spotify top songs */}
			<div className='font-barlow'>
				<AnimatedText
					as='h2'
					variants={opacityVariant}
					className='text-3xl font-bold capitalize text-neutral-900 dark:text-neutral-200 sm:text-4xl'
				>
					My Top streams songs
				</AnimatedText>

				<AnimatedText as='p' variants={opacityVariant} className='mt-4 text-gray-700 dark:text-gray-300'>
					<span>
						{topTracks ? (
							<>
								<span className='font-semibold'>{topTracks?.[0]?.title}</span>
								{' is the'}
							</>
						) : (
							<span className='h-6 w-20 bg-white dark:bg-darkSecondary'></span>
						)}
					</span>
					most streamed song of mine in last 4 weeks. Here's my top tracks on Spotify updated daily.
				</AnimatedText>
				<div className='my-10 flex flex-col gap-0 font-barlow'>
					{!isTopTrackLoading && isTopTrackArray ? (
						topTracks.map((track: SpotifyTrackType, index: number) => (
							<SpotifyTrack
								key={index}
								id={index}
								url={track.url}
								title={track.title}
								coverImage={track.coverImage.url}
								artist={track.artist}
							/>
						))
					) : (
						<SpotifyLoadingSongs />
					)}
				</div>
			</div>

			{/* Spotify top Artists */}

			<div className='font-barlow'>
				<AnimatedText
					as='h2'
					variants={opacityVariant}
					className='text-3xl font-bold capitalize text-neutral-900 dark:text-neutral-200 sm:text-4xl'
				>
					My Top Artists
				</AnimatedText>
				<AnimatedText as='p' variants={opacityVariant} className='mt-4 text-gray-700 dark:text-gray-300'>
					My most listened Artist
					<span>
						{artists ? (
							<>
								{' is '}
								<span className='font-semibold'>{artists?.[0]?.name}</span>
							</>
						) : (
							<span className='h-6 w-20 bg-white dark:bg-darkSecondary'></span>
						)}
					</span>
					in last 4 weeks on Spotify.
				</AnimatedText>

				<div className='my-10 flex flex-col gap-0 font-barlow'>
					{isArtistLoading ? (
						!isArtistArray ? (
							<div className='text-sm'>Not Enough Data to Show</div>
						) : (
							artists?.map((artist: SpotifyArtistType, index: number) => (
								<SpotifyArtist
									key={index}
									id={index}
									name={artist.name!}
									url={artist.url}
									coverImage={artist.coverImage.url}
									popularity={artist.popularity!}
								/>
							))
						)
					) : (
						<SpotifyLoadingArtists />
					)}
				</div>
			</div>
		</section>
	)
}

export default StatPage
