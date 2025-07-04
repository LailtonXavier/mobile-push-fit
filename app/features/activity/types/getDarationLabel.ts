import { Activity } from '@/core/domain/entities/activity';

export const getIntensityText = (intensity: Activity['intensity']) => {
  switch (intensity) {
    case 'low':
      return 'Baixa';
    case 'medium':
      return 'Média';
    case 'high':
      return 'Alta';
    default:
      return 'low';
  }
};