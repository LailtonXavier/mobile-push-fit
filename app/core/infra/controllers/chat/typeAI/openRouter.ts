import { Message } from '@/features/chat/screens/components/constants/ChatProps';
import Constants from 'expo-constants';
import { prompt } from '../contants/prompt';

export const fetchAI = async (messages: Message[]): Promise<string> => {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Constants.expoConfig?.extra?.CHAT_KEY || 'api'}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://localhost',
        'X-Title': 'PersonalTrainerApp',
      },
      body: JSON.stringify({
        model: 'mistralai/mistral-7b-instruct',
        messages: [
          {
            role: "system",
            content: prompt
          },
          ...messages.map(msg => ({
            role: msg.isUser ? "user" : "assistant",
            content: msg.text
          }))
        ],
        temperature: 0.7,
        max_tokens: 300
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Erro da OpenRouter:', data);
      return data.error?.message || 'Erro desconhecido.';
    }

    const content = data.choices?.[0]?.message?.content;

    if (!content || content.trim() === '') {
      return "Desculpe, não consegui entender sua pergunta. Tente reformular.";
    }

    return content;
  } catch (error) {
    console.error('Erro geral:', error);
    return 'Erro técnico ao chamar a IA.';
  }
};