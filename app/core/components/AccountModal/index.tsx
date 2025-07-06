import { useDeleteAccount } from '@/hooks/useDeleteAccount';
import { useDeleteAccountForm } from '@/hooks/useDeleteAccountForm';
import useTheme from '@/hooks/useTheme';
import { useUpdateAccount } from '@/hooks/useUpdateAccount';
import { useUpdateAccountForm } from '@/hooks/useUpdateAccountForm';
import { Eye, EyeOff, X } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Keyboard,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import BaseTitle from '../BaseTitle';
import { default as Button, default as CancellButton } from '../CancellButton';
import DeleteButton from '../DeleteButton';
import SemiTitle from '../SemiTitle';

interface AccountModalProps {
  visible: boolean;
  onClose: () => void;
  isDark: boolean;
  typeEdit: 'nome' | 'email';
  name?: string;
  email?: string;
  password?: string;
  isEditing?: boolean;
}

interface handleEditAccountProps {
  name?: string
  email?: string
}

export default function AccountModal({ visible, onClose, isDark, email, name, password, typeEdit, isEditing }: AccountModalProps) {

  const { 
    control, 
    handleSubmit, 
    formState: { errors }, 
    clearErrors, 
    setValue } = useUpdateAccountForm();

  const {
    control: controlDelete,
    handleSubmit: handleSubmitDelete,
    formState: { errors: errorsDelete },
    clearErrors: clearErrorsDelete,
    setValue: setValueDelete,
  } = useDeleteAccountForm();
  

  const {colors} = useTheme()

  const { mutate: updateAccount, isPending: isUpdating } = useUpdateAccount();
  const { mutate: deleteAccount, isPending: isDeleting } = useDeleteAccount();
  const [showPassword, setShowPassword] = useState(false);

  
  useEffect(() => {
    if (isEditing) {
      if (typeEdit === 'nome') {
        setValue('name', name ?? '');
      } else if (typeEdit === 'email') {
        setValue('email', email ?? '');
      }
      setValueDelete('password', password ?? '');
    }
  }, [isEditing, setValue, setValueDelete]);
 
  useEffect(() => {
    const errorFields = Object.keys(errors);
    
    if (errorFields.length > 0) {
      const timeout = setTimeout(() => {
        errorFields.forEach((field) => {
          clearErrors(field as any);
        });
      }, 2000);
      
      return () => clearTimeout(timeout);
    }
  }, [errors, clearErrors]);
  
  const handleEditAccount = (data: handleEditAccountProps) => {
    if (typeEdit === 'nome') {
      updateAccount({ name: data.name });
    } else if (typeEdit === 'email') {
      updateAccount({ email: data.email });
    }
    onClose();
  };

  const handleDeleteAccount = (data: { password: string }) => {
    deleteAccount({ password: data.password });
    onClose();
  };

  const handleCancellDeleteAccount = () => {
    onClose()
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-end">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              className={`${isDark ? 'bg-card-light' : 'bg-card-dark'} rounded-2xl p-6 w-96 mx-auto mb-80`}
              style={{ height: 230 }}
            >
              <View className="flex flex-row justify-between items-center mb-2">
                <SemiTitle
                  title={`${isEditing ? `Editar ${typeEdit}` : 'Excluir conta'}`}
                  className="text-2xl"
                />
                <Pressable onPress={onClose}>
                  <X color={colors.text} />
                </Pressable>
              </View>

              <View className='flex items-start w-full'>
              {isEditing && typeEdit === 'nome' && (
                <>
                  <BaseTitle isDark={!isDark} title='Nome' className='mt-2 mb-1' />
                  <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        className='border border-gray-300 pl-3 rounded-md px-3 py-3 w-full'
                        placeholder="Edite seu nome"
                        placeholderTextColor={'#737373'}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  {errors.name && (
                    <Text className="text-red-500 text-base font-sans">
                      {errors.name.message}
                    </Text>
                  )}
                </>
              )}

              {isEditing && typeEdit === 'email' && (
                <>
                  <BaseTitle isDark={!isDark} title='Email' className='mt-2 mb-1' />
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        className='border border-gray-300 pl-3 rounded-md px-3 py-3 w-full'
                        placeholder="Edite seu email"
                        placeholderTextColor={'#737373'}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  {errors.email && (
                    <Text className="text-red-500 text-base font-sans">
                      {errors.email.message}
                    </Text>
                  )}
                </>
              )}

              {!isEditing && (
              <>
                <BaseTitle isDark={!isDark} title="Senha" className="mt-2 mb-1" />
                <View className="w-full relative">
                  <Controller
                    control={controlDelete}
                    name="password"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        className={`border border-gray-300 pl-3 pr-10 ${isDark ? 'text-text-light' : 'text-text-dark'} rounded-md px-3 py-3 w-full`}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#737373"
                        secureTextEntry={!showPassword}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <Pressable
                    className="absolute right-3 top-3"
                    onPress={() => setShowPassword(prev => !prev)}
                  >
                    {!showPassword ? (
                      <EyeOff size={20} color={!isDark ? '#ffffffde' : '#737373'} />
                    ) : (
                      <Eye size={20} color={!isDark ? '#ffffffde' : '#737373'} />
                    )}
                  </Pressable>
                </View>
              
                {errorsDelete.password && (
                  <Text className="text-red-500 text-base font-sans mt-1">
                    {errorsDelete.password.message}
                  </Text>
                )}
            </>
          )}

            </View>

              {isEditing ?
                <Button 
                  title='Editar conta' 
                  className='mt-6'
                  onPress={handleSubmit(handleEditAccount)}
                />
                : 
                <View className='mt-6 flex flex-row justify-around align-center'>
                  <CancellButton
                    title='Cancelar'
                    className='w-24'
                    onPress={handleCancellDeleteAccount}
                  />
                  <DeleteButton
                    title={'Excluir conta'}
                    className='w-40'
                    disabled={isDeleting}
                    onPress={handleSubmitDelete(handleDeleteAccount)}
                  />
                </View>
              }
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
