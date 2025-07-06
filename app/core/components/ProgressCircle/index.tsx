import useTheme from '@/hooks/useTheme';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import BaseTitle from '../BaseTitle';
import MediumTitle from '../MediumTitle';
import SemiTitle from '../SemiTitle';
import Card from '../Card';

interface Props {
  registeredActivities: number;
  meta: number;
  children?: ReactNode;
}

const ProgressCircle = ({ registeredActivities, meta, children }: Props) => {
  const { colors, isDark } = useTheme();

  const size = 150;
  const height = 114;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const fullCircle = 2 * Math.PI * radius;
  const arcLength = 0.60 * fullCircle;

  const progresso = Math.min((registeredActivities / meta) * 100, 100);
  const strokeDashoffset = arcLength - (progresso / 100) * arcLength;

  return (
    <Card>
      <MediumTitle title='Atividades' className='text-center mb-3'  />
      <Svg width={size} height={height}>
        <G rotation="162" origin={`${center}, ${center}`}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={colors.circle2}
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength}, ${fullCircle}`}
            strokeDashoffset={0}
            strokeLinecap="round"
            fill="transparent"
          />
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={colors.circle1}
            strokeWidth={strokeWidth}
            strokeDasharray={`${arcLength}, ${fullCircle}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </G>
      </Svg>
      <View className='absolute flex items-center justify-center top-[100]'>
        <SemiTitle 
          title={String(registeredActivities)} 
          className='text-3xl' 
        />
        <BaseTitle isDark={!isDark} title='registrados' />
      </View>
      {children}
    </Card>
  );
};

export default ProgressCircle;
