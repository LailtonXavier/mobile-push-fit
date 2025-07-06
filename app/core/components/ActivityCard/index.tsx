import { TouchableHighlight, View } from 'react-native';
import BaseTitle from '@/core/components/BaseTitle';
import SemiTitle from '@/core/components/SemiTitle';
import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import useTheme from '@/hooks/useTheme';
import { getDurationLabel } from '@/features/activity/types/getIntensityText';
import { getIntensityText } from '@/features/activity/types/getDarationLabel';
import { Activity } from '@/core/domain/entities/activity';

export interface ActivityCardProps {
  data: Activity
  onPress: () => void
}

const getActivityIcon = (name: string): string => {
  const normalized = name.toLowerCase();

  if (normalized.includes('corrida') || normalized.includes('correr')) return '🏃‍♂️';
  if (normalized.includes('natação') || normalized.includes('nadar')) return '🏊‍♂️';
  if (normalized.includes('musculação') || normalized.includes('academia')) return '🏋️‍♂️';

  return '💪';
};

const ActivityCard = ({ data, onPress }: ActivityCardProps) => {
  const {isDark, colors} = useTheme()

  const icon = getActivityIcon(data.name);

  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.circle2}>
      <View>
        <View className="flex flex-row justify-between items-center w-full">
          <BaseTitle isDark={!isDark} title={`${icon} ${data.name}`} />
          <ChevronRight color={colors.secondary} />
        </View>
        <View className="flex flex-row justify-between items-center w-full mt-1">
          <SemiTitle title={`Tempo: ${data.duration} min`} className="text-xs" />
          <SemiTitle title={`Intensidade: ${getIntensityText(data.intensity)}`} className="text-xs" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ActivityCard;
