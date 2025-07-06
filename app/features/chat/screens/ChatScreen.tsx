import { useState, useRef, useEffect } from 'react';
import { View, KeyboardAvoidingView, FlatList, Platform } from 'react-native';
import { Message } from './components/constants/ChatProps';
import { InputChat } from './components/InputChat';
import PageTitleChat from '@/core/components/PageTitleChat';
import { RenderMessage } from './components/RenderMessage/ndex';
import Background from '@/core/components/Background';
import useTheme from '@/hooks/useTheme';
import { fetchAI } from '@/core/infra/controllers/chat/fetchAI';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {
  const {isDark} = useTheme()

  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: 'Olá! Sou seu assistente de treinos. Como posso te ajudar com musculação ou exercícios hoje? Lembrando que nosso bate-papo será excluido após sair da tela :)',
      isUser: false, 
      timestamp: new Date() 
    },
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  const handleSend = async () => {
    if (newMessage.trim() === '' || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await fetchAI([...messages, userMessage]);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);
  
  return (
    <SafeAreaView className={`flex-1 pb-[-40] ${isDark ? 'bg-background-light' : 'bg-background-dark'}`}>
    <Background className='flex-1 px-6'>
      <PageTitleChat title='Chat' className='w-full justify-center h-12' />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className={`flex-1 ${isDark ? 'bg-background-light' : 'bg-background-dark'}`}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <View className="flex-1">
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={({ item }) => <RenderMessage item={item} />}
            keyExtractor={(item) => item.id}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            className="flex-1"
            showsVerticalScrollIndicator={false}
          />

          <InputChat 
            handleSend={handleSend}
            onMessageChange={setNewMessage}
            value={newMessage}
            isLoading={isLoading}
          />
        </View>
      </KeyboardAvoidingView>
    </Background>
    </SafeAreaView>
  );
}