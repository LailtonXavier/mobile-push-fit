import Button from '@/core/components/Button';
import ContainerForm from '@/core/components/ContainerForm';
import HasAccount from '@/core/components/HasAccount';
import Input from '@/core/components/Input';
import Logo from '@/core/components/Logo';
import MainTitle from '@/core/components/MainTitle';
import { RegisterUserDto } from '@/core/domain/types/user-types';
import { useCreateUser } from '@/hooks/useCreateUser';
import { useRegisterForm } from '@/hooks/useRegisterForm';
import useTheme from '@/hooks/useTheme';
import { router } from 'expo-router';
import { useRef } from 'react';
import { Controller } from 'react-hook-form';
import { Text, TextInput } from 'react-native';

interface handleRegisterProps {
  email: string
  password: string
}

export default function RegisterScreen() {
  const { isDark } = useTheme();
  const { control, handleSubmit, errors } = useRegisterForm();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  const { mutate: createUser, isPending } = useCreateUser();

  const handleRegister = (data: handleRegisterProps) => {
    const paramsRegister: RegisterUserDto = {
      name: '',
      email: data.email,
      password: data.password,
      photo: '',
    };

    createUser(paramsRegister);
  };

  const handleGoToLogin = () => {
    router.push('/(pages)/login');
  };

  return (
    <ContainerForm isDark={!isDark} contentClassName="justify-start">
      <Logo />
      <MainTitle isDark={!isDark} title="Crie sua conta" />

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
      {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}

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
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            textContentType="newPassword"
            autoComplete="new-password"
          />
        )}
      />
      {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            ref={confirmPasswordRef}
            isDark={!isDark}
            title="Confirmar senha"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            hasIconEye
            className="mb-6"
            returnKeyType="done"
          />
        )}
      />
      {errors.confirmPassword && 
      <Text className='text-red-400'>
        {errors.confirmPassword.message}
      </Text>}
      <Button
        title='Criar conta'
        disabled={isPending}
        onPress={handleSubmit(handleRegister)}
      />
      <HasAccount 
        isDark={!isDark}
        onPress={handleGoToLogin}
        firstTitle='Já possui conta'
        secondTitle='Fazer login'
      />
    </ContainerForm>
  );
}
