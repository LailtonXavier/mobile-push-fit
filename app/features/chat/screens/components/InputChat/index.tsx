import useTheme from '@/hooks/useTheme';
import { Send } from 'lucide-react-native';
import { TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';

interface InputChatProps {
  value: string;
  onMessageChange: (text: string) => void;
  handleSend: () => void;
  isLoading?: boolean;
}

export const InputChat = ({ value, onMessageChange, handleSend, isLoading }: InputChatProps) => {
  const {isDark, colors} = useTheme()

  return (
      <View className={`${isDark ? 'bg-chat-light' : 'bg-chat-dark'} flex-row items-center rounded-lg mt-1`}>
        <TextInput
          className={`flex-1 px-4 py-2 font-sans ${!isDark ? 'text-text-dark' : 'text-text-light'} mr-2 h-12` }
          placeholderTextColor={colors.textInput}
          placeholder="O que tem na sua mente?"
          value={value}
          onChangeText={onMessageChange}
          onSubmitEditing={handleSend}
          editable={!isLoading}
        />
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center mr-2"
          onPress={handleSend}
          disabled={value.trim() === '' || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={colors.textInput} />
          ) : (
            <Send size={20} color={colors.textInput} />
          )}
        </TouchableOpacity>
      </View>
  );
};