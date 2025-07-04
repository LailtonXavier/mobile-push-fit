import React from 'react';
import { View } from 'react-native';
import SemiTitle from '../SemiTitle';
import { Activity } from '@/core/domain/entities/activity';


interface SummaryItem {
  label: string | Activity['intensity'];
  value: string;
}

interface SummaryListProps {
  items: SummaryItem[];
  isDark: boolean;
}

const SummaryList = ({ items, isDark }: SummaryListProps) => {
  return (
    <View className="flex flex-row justify-between w-full">
      {items.map((item, index) => (
        <SemiTitle
          key={index}
          title={`${item.value} - ${item.label}`}
          className="w-1/4 text-xs"
        />
      ))}
    </View>
  );
};

export default SummaryList;
