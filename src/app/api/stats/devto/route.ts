import devToProvider from '@provider/dev.to/devto.provider'

export async function GET() {
	const followerData = await devToProvider.getAllFollowers().catch((e) => {
		console.error('devToProvider.getPageOfPosts handler error: ', e)
		return null
	})

	if (!followerData) {
		return Response.json(
			{ followers: 0, likes: 0, views: 0, comments: 0, posts: 0 },
			{
				headers: {
					'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
				},
				status: 200,
			}
		)
	}

	const followers = (followerData || []).reduce((acc, _, index) => (acc += index), 0)

	const postData = await devToProvider.getPageOfPosts().catch((e) => {
		console.error('devToProvider.getPageOfPosts handler error: ', e)
		return null
	})

	if (!postData) {
		return Response.json(
			{ followers: 0, likes: 0, views: 0, comments: 0, posts: 0 },
			{
				headers: {
					'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
				},
				status: 200,
			}
		)
	}

	const { totalComments, totalLikes, totalPosts, totalViews } = postData.reduce(
		(acc, item) => {
			const { public_reactions_count, comments_count, page_views_count } = item

			acc.totalComments += comments_count
			acc.totalLikes += public_reactions_count
			acc.totalViews += page_views_count
			acc.totalPosts += 1

			return acc
		},
		{
			totalViews: 0,
			totalLikes: 0,
			totalComments: 0,
			totalPosts: 0,
		}
	)

	return Response.json(
		{
			followers,
			likes: totalLikes,
			views: totalViews,
			comments: totalComments,
			posts: totalPosts,
		},
		{
			headers: {
				'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
			},
			status: 200,
		}
	)
}
