import React, { ReactNode } from 'react';
import { 
  Keyboard, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableWithoutFeedback, 
  View, 
  ScrollView,
  Text,
  ScrollViewProps
} from 'react-native';

interface ContainerFormProps {
  isDark: boolean;
  children: ReactNode;
  title?: string;
  withScroll?: boolean;
  keyboardVerticalOffset?: number;
  contentClassName?: string;
}

const ContainerForm = ({
  isDark,
  children,
  title,
  withScroll = true,
  keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0,
  contentClassName = ''
}: ContainerFormProps) => {
  const Container = withScroll ? ScrollView : View;
  
  const containerProps = withScroll ? {
    contentContainerStyle: { flexGrow: 1 },
    keyboardShouldPersistTaps: 'handled' as const
  } : {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardVerticalOffset}
        className={`flex-1 ${isDark ? 'bg-background-dark' : 'bg-background-light'}`}
      >
        <Container {...containerProps as ScrollViewProps}>
          <View className={`flex-1 items-center p-6 ${contentClassName} ${isDark ? 'bg-background-dark' : 'bg-background-light'}`}>
            {title && (
              <Text className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                {title}
              </Text>
            )}
            {children}
          </View>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ContainerForm;