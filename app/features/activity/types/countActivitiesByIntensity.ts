import { Activity } from '@/core/domain/entities/activity';

export function countActivitiesByIntensity(activities: Activity[] = []) {
  const counts: Record<string, number> = {};

  for (const activity of activities) {
    const key = activity.intensity;
    counts[key] = (counts[key] || 0) + 1;
  }

  return Object.entries(counts).map(([label, count]) => ({
    label,
    value: String(count),
  }));
}
