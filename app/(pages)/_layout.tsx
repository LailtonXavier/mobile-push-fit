import { Stack } from 'expo-router';

export default function PagesLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="register" 
        options={{ 
          title: '',
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="login" 
        options={{ 
          title: '',
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="activity" 
        options={{ 
          title: '',
          headerShown: false
        }} 
      />
    </Stack>
  );
}