import { Text, View } from 'react-native';
import { Message } from '../constants/ChatProps';
import useTheme from '@/hooks/useTheme';

export const RenderMessage = ({ item }: { item: Message }) => {
  const {colors} = useTheme()

  return (
    <View 
      className={`p-3 my-1 rounded-lg max-w-[80%] ${item.isUser ? 'bg-cardInput-dark self-end' : 'bg-chat-light self-start'}`}>
      <Text className={`${item.isUser ? 'text-white' : 'text-black'} font-sans` }>{item.text}</Text>
      <Text className={`text-xs mt-1 ${item.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
        {item.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
    </View>
)}