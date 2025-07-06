import { Activity } from '@/core/domain/entities/activity';

export function countActivitiesByName(activities: Activity[] = []) {
  const counts: Record<string, number> = {};

  for (const activity of activities) {
    counts[activity.name] = (counts[activity.name] || 0) + 1;
  }

  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}
