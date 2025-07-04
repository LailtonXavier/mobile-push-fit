import { forwardRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, TextInputProps, Text } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';

interface InputProps extends TextInputProps {
  className?: string;
  isDark: boolean;
  title: string;
  hasIconEye?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<TextInput, InputProps>(({
  className,
  isDark = false,
  title,
  hasIconEye = false,
  errorMessage,
  secureTextEntry,
  ...rest
}, ref) => {
  const [showPassword, setShowPassword] = useState(true);

  const isPassword = hasIconEye && secureTextEntry !== false;

  return (
    <View className={`${className} w-full`}>
      <View className={`relative flex-row items-center border-b ${isDark ? 'border-border-dark' : 'border-border-light'}`}>
        <TextInput
          ref={ref}
          className={`${isDark ? 'bg-primary-dark text-subtitle-dark' : 'bg-primary-light text-subtitle-light'} text-lg font-sans py-2 h-11 mt-4 flex-1 pr-10`}
          placeholder={title}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={isPassword && showPassword}
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity
            className="absolute right-0 mt-4"
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} color={isDark ? '#ffffffde' : '#737373'} />
            ) : (
              <Eye size={20} color={isDark ? '#ffffffde' : '#737373'} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={{ color: 'red', marginTop: 4 }}>{errorMessage}</Text>}
    </View>
  );
});

export default Input;
