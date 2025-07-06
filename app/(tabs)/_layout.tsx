import { createTabOptions } from '@/core/components/TabOptions/tabOptions';
import useTheme from '@/hooks/useTheme';
import { ChatIcon } from '@assets/icons/ChatIcon';
import { HomeIcon } from '@assets/icons/HomeIcon';
import { SettingsIcon } from '@assets/icons/SettingsIcon';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          paddingTop: 5,
          height: 80,
        },
      }}
    >
      <Tabs.Screen name="index" options={createTabOptions('Home', HomeIcon)} />
      <Tabs.Screen name="chat" options={createTabOptions('Chat', ChatIcon)} />
      <Tabs.Screen name="profile" options={createTabOptions('Configurações', SettingsIcon)} />
    </Tabs>
  );
}
