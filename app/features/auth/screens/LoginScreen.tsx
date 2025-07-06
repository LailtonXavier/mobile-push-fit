import BaseTitle from '@/core/components/BaseTitle';
import Button from '@/core/components/Button';
import ContainerForm from '@/core/components/ContainerForm';
import HasAccount from '@/core/components/HasAccount';
import Input from '@/core/components/Input';
import Logo from '@/core/components/Logo';
import MainTitle from '@/core/components/MainTitle';
import { LoginDto } from '@/core/domain/types/user-types';
import { useLogin } from '@/hooks/useLogin';
import { useLoginForm } from '@/hooks/useLoginForm';
import useTheme from '@/hooks/useTheme';
import { router } from 'expo-router';
import { useRef } from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput } from 'react-native';

interface handleLoginProps {
  email: string
  password: string
}

export default function LoginScreen() {
  const { isDark } = useTheme();
  const { control, handleSubmit, errors } = useLoginForm();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const { mutate: login, isPending } = useLogin();

  const handleLogin = (data: handleLoginProps) => {
    const paramsLogin: LoginDto = {
      email: data.email,
      password: data.password,
    };

    login(paramsLogin);
    router.push('/(tabs)/');
  };

  const handleGoToRegister = () => {
    router.push('/(pages)/register');
  };

  return (
    <ContainerForm isDark={!isDark} contentClassName="justify-start">
      <Logo />
      <MainTitle isDark={!isDark} title="Login" />
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            ref={emailRef}
            isDark={!isDark}
            title="E-mail"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
        )}
      />
      {errors.email && 
        <Text className="text-red-500 text-base font-sans">
          {errors.email.message}
        </Text>
      }

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            ref={passwordRef}
            isDark={!isDark}
            title="Senha"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            hasIconEye
            textContentType="newPassword"
            autoComplete="new-password"
            className="mb-6"
            returnKeyType="done"
          />
        )}
      />
      {errors.password && 
      <Text className="text-red-500 text-base font-sans">
        {errors.password.message}
      </Text>
      }
      <Button
        title='Login'
        disabled={isPending}
        onPress={handleSubmit(handleLogin)}
      />
      <HasAccount
        isDark={!isDark}
        onPress={handleGoToRegister}
        firstTitle='Não possui conta'
        secondTitle='Criar conta'
      />
    </ContainerForm>
  );
}
