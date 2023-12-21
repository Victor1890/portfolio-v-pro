import { NextApiRequest, NextApiResponse } from 'next';
import githubProvider from '@provider/github/github.provider';
import {
  IContributionDay,
  IUserContributionDetails,
  IWeek,
} from '@provider/github/github.interface';
import { calculateMostProductiveDayOfWeek } from '@utils/github.util';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const now = new Date();
  const from = new Date();
  const to = new Date();

  from.setDate(now.getDate() - 30);
  to.setDate(now.getDate() + 1);

  const contributions = await githubProvider
    .getContributions(from, to)
    .catch((e) => {
      console.error('githubProvider.getContribution error: ', e);
      return null;
    });

  if (!contributions) {
    return res
      .status(500)
      .json({ error: { message: 'Error fetching GitHub data' } });
  }

  const { data } = contributions;
  const weeks = data.user.contributionsCollection.contributionCalendar.weeks;

  const userData: IUserContributionDetails = {
    contributions: weeks.flatMap((week: IWeek) =>
      week.contributionDays.map((day: IContributionDay) => {
        const date = new Date(day.date);
        day.shortDate = date.getDate().toString();
        return day;
      })
    ),
    name: data.user.name,
  };

  const contributionCountByDayOfWeek = calculateMostProductiveDayOfWeek(
    data.user.contributionsCollection.contributionCalendar
  );

  const result = {
    ...userData,
    contributionCountByDayOfWeek,
  };

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(result);
}
