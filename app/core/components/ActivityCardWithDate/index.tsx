import BaseTitle from '@/core/components/BaseTitle';
import SemiTitle from '@/core/components/SemiTitle';
import { Activity } from '@/core/domain/entities/activity';
import { formatToMonthYear } from '@/features/activity/types/formatToMonthYear';
import { getIntensityText } from '@/features/activity/types/getDarationLabel';
import { getDurationLabel } from '@/features/activity/types/getIntensityText';
import useTheme from '@/hooks/useTheme';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';

interface ActivityCardWithDateProps {
  data: Activity
  onPress?: () => void
}

const ActivityCardWithDate = ({ data, onPress }: ActivityCardWithDateProps) => {
  const {isDark, colors} = useTheme()

  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.circle2}>
      <View>
        <View className="flex flex-row mt-4">
          <BaseTitle isDark={!isDark} className='w-1/4' title='Data' />
          <BaseTitle isDark={!isDark} className='w-1/4' title='Nome' />
          <BaseTitle isDark={!isDark} className='w-1/4' title='Intensidade' />
          <BaseTitle isDark={!isDark} className='w-1/4' title='Duração' />
        </View>
        <View className="flex flex-row mt-1">
          <SemiTitle title={`${formatToMonthYear(data.createdAt)}`} className="w-1/4 text-center text-xs" />
          <SemiTitle title={`${data.name}`} className="w-1/4 text-center text-xs" />
          <SemiTitle title={`${getIntensityText(data.intensity)}`} className="w-1/4 text-center text-xs" />
          <SemiTitle title={`${getDurationLabel(data.duration)}`} className="w-1/4 text-center text-xs" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ActivityCardWithDate;
