import React from 'react';
import { View, Text } from 'react-native';
import { CheckCircle, XCircle } from 'lucide-react-native';

export const toastConfig = {
  success: ({ text1 }: any) => (
    <View className="w-96 bg-green-50 p-5 rounded-xl items-center justify-center self-center mt-12 shadow-lg shadow-black/25">
      <CheckCircle color="#166534" size={32} />
      <Text className="text-textToast-light mt-2 font-bold text-base text-center">
        {text1}
      </Text>
    </View>
  ),
  error: ({ text1 }: any) => (
    <View className="w-[90%] bg-red-50 p-5 rounded-xl items-center justify-center self-center mt-12 shadow-lg shadow-black/25">
      <XCircle color="#991b1b" size={32} />
      <Text className="text-textToastError-light mt-2 font-bold text-base text-center">
        {text1}
      </Text>
    </View>
  ),
};