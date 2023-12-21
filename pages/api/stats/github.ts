import { NextApiRequest, NextApiResponse } from "next";
import githubProvider from "@provider/github/github.provider";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {

  const profile = await githubProvider.getProfile().catch((error) => {
    console.error("githubProvider.getProfile error: ", error);
    return null
  });

  if (!profile) {
    return res.status(500).json({ error: { message: "Error fetching GitHub data" } })
  }

  const { public_gists, public_repos, followers } = profile

  const repositories = await githubProvider.getRepositories().catch((error) => {
    console.error("githubProvider.getRepositories error: ", error);
    return null
  });

  if (!repositories) {
    return res.status(500).json({ error: { message: "Error fetching GitHub data" } })
  }

  const { forks, stars } = repositories.reduce((acc, item) => {

    if (!item.fork) return acc

    acc.stars += item.stargazers_count || 0
    acc.forks += item.forks_count || 0

    acc = { ...acc }

    return acc
  }, {
    stars: 0,
    forks: 0
  })

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({
    repos: public_repos,
    gists: public_gists,
    followers,
    githubStars: stars,
    forks,
  });
}
