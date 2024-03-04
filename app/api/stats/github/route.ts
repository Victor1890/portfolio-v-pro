import githubProvider from '@provider/github/github.provider'

export async function GET() {
	const res = Response

	const profile = await githubProvider.getProfile().catch((error) => {
		console.error('githubProvider.getProfile error: ', error)
		return null
	})

	if (!profile) {
		return res.json(
			{ error: { message: 'Error fetching GitHub data' } },
			{
				status: 500,
			}
		)
	}

	const { public_gists, public_repos, followers } = profile

	const repositories = await githubProvider.getRepositories().catch((error) => {
		console.error('githubProvider.getRepositories error: ', error)
		return null
	})

	if (!repositories) {
		return res.json(
			{ error: { message: 'Error fetching GitHub data' } },
			{
				status: 500,
			}
		)
	}

	const { forks, stars } = repositories.reduce(
		(acc, item) => {
			if (!item.fork) return acc

			acc.stars += item.stargazers_count || 0
			acc.forks += item.forks_count || 0

			acc = { ...acc }

			return acc
		},
		{
			stars: 0,
			forks: 0,
		}
	)

	return res.json(
		{
			repos: public_repos,
			gists: public_gists,
			followers,
			githubStars: stars,
			forks,
		},
		{
			status: 200,
			headers: {
				'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
			},
		}
	)
}
