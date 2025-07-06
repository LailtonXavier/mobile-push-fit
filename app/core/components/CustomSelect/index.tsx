import useTheme from '@/hooks/useTheme';
import { ChevronDown } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  TouchableOpacity,
  View
} from 'react-native';
import BaseTitle from '../BaseTitle';

interface Option {
  label: string;
  value: string | number;
}

interface Props {
  label: string;
  value: string | number;
  options: Option[];
  onSelect: (value: string | number) => void;
}

export default function CustomSelect({ label, value, options, onSelect }: Props) {
  const [visible, setVisible] = useState(false);
  const { isDark, colors } = useTheme();

  return (
    <>
      <BaseTitle isDark={!isDark} title={label} className='mt-2 mb-1' />
      <TouchableOpacity
        className="border flex flex-row justify-between relative border-gray-300 rounded-md px-3 py-3 w-full"
        onPress={() => setVisible(true)}
      >
        <BaseTitle isDark={!isDark} title={value || 'Selecione...'} className='text-subtitle-light' />
        <ChevronDown color={colors.secondary} />
      </TouchableOpacity>

      <Modal transparent visible={visible} animationType="fade">
        <Pressable
          className="flex-1 bg-black/40 justify-center px-6"
          onPress={() => setVisible(false)}
        >
          <View className={`${isDark ? 'bg-background-light' : 'bg-background-dark'} rounded-lg max-h-[300px] w-full py-2`}>
            <FlatList
              data={options}
              keyExtractor={(item) => String(item.value)}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="px-4 py-4 border-b border-gray-200 dark:border-zinc-600"
                  onPress={() => {
                    onSelect(item.label);
                    setVisible(false);
                  }}
                >
                  <BaseTitle isDark={!isDark} title={item.label}/>
                </TouchableOpacity>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
}
