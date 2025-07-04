import React, {JSX} from 'react';
import { Text } from 'react-native';

export function createTabOptions(label: string, Icon: ({ color, strokeWidth }: { color: string; strokeWidth: number }) => JSX.Element) {
  return {
    title: '',
    headerShown: false,
    tabBarLabel: ({ focused, color }: { focused: boolean; color: string }) => (
      <Text
        style={{
          color,
          fontSize: 16,
          fontFamily: focused ? 'Exo_700Bold' : 'Exo_400Regular',
        }}
      >
        {label}
      </Text>
    ),
    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
      <Icon color={color} strokeWidth={focused ? 2.5 : 1.5} />
    ),
  };
}
