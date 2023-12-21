import {
  IContributionCalendar,
  IWeek,
} from '@provider/github/github.interface';

export function calculateMostProductiveDayOfWeek(
  contributionCalendar: IContributionCalendar
): { day: string; count: number }[] {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const contributionCountByDayOfWeek = calculateContributionCountByDayOfWeek(
    contributionCalendar.weeks,
    daysOfWeek
  );

  const sortedData = Object.entries(contributionCountByDayOfWeek)
    .sort((a, b) => daysOfWeek.indexOf(a[0]) - daysOfWeek.indexOf(b[0]))
    .map(([day, count]) => ({ day, count }));

  const sunday = sortedData.shift();

  if (sunday) {
    sortedData.push(sunday);
  }

  return sortedData;
}

function calculateContributionCountByDayOfWeek(
  weeks: IWeek[],
  daysOfWeek: string[]
): Record<string, number> {
  const contributionCountByDayOfWeek: Record<string, number> = {
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
  };

  for (const week of weeks) {
    for (const day of week.contributionDays) {
      const date = new Date(day.date);
      const dayOfWeek = daysOfWeek[date.getUTCDay()];
      contributionCountByDayOfWeek[dayOfWeek] += day.contributionCount;
    }
  }

  return contributionCountByDayOfWeek;
}
