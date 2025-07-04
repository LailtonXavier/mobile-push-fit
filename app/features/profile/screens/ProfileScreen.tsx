import AccountModal from '@/core/components/AccountModal';
import Background from '@/core/components/Background';
import BaseTitle from '@/core/components/BaseTitle';
import CardInput from '@/core/components/CardInput';
import PageTitle from '@/core/components/PageTitle';
import SemiTitle from '@/core/components/SemiTitle';
import { useAuthStore } from '@/core/infra/store/useAuthStore';
import useTheme from '@/hooks/useTheme';
import { LogoutIcon } from '@assets/icons/LogoutIcon';
import { TrashDeleteAccount } from '@assets/icons/TrashDeleteAccount';
import { EditAccount } from '@assets/icons/TrashDeleteAccount copy';
import { router } from 'expo-router';
import { ToggleLeft, ToggleRight } from 'lucide-react-native';
import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';

export default function ProfileScreen() {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const [typeEdit, setTypeEdit] = useState<"nome" | "email">('nome');

  const { isDark, colors, toggleTheme } = useTheme();
  const {user,logout} = useAuthStore()

  const name = user?.name || '{{sem nome}}'
  const email = user?.email || 'sem gmail'

  const nameTheme = isDark ? 'Tema escuro' : 'Tema claro'

  const handleLogout = () => {
    logout()
    router.push('/(pages)/login');
  }

  const handleEdit = (typeEdit: 'nome' | 'email') => {
    setIsEditing(true)
    setTypeEdit(typeEdit)
    setShowModal(true)
  }
  
  const handleDelete = () => {
    setIsEditing(false)
    setShowModal(true)
  }

  return (
    <Background className='flex-1 px-6'>
      <AccountModal 
        visible={showModal}
        isEditing={isEditing}
        isDark={isDark}
        typeEdit={typeEdit}
        email={email}
        name={name}
        onClose={() => setShowModal(false)}
      />
      <PageTitle title='Configuração' hasIcon={false} />
      <Image
        source={require('@assets/images/profile2.png')}
        className="mt-9 h-36 flex justify-center w-full"
        resizeMode="center"
      />

      <Pressable onPress={() => handleEdit('nome')}>
        <CardInput className='p-4 mt-6'>
          <BaseTitle isDark={!isDark} title={`Nome: ${name}`} />
          <EditAccount color={colors.editIcon} />
        </CardInput>
      </Pressable>

      <Pressable onPress={() => handleEdit('email')}>
        <CardInput className='p-4 mt-2 mb-6'>
          <BaseTitle isDark={!isDark} title={`Email: ${email}`} />
          <EditAccount color={colors.editIcon} />
        </CardInput>
      </Pressable>

      <SemiTitle title='Ações' className='text-lg' />

      <Pressable onPress={handleDelete}>
        <CardInput className='mt-4 p-5'>
          <View className='flex flex-row gap-2'>
            <TrashDeleteAccount />
            <BaseTitle isDark={!isDark} title='Excluir conta' className='text-deleteTrash-light' />
          </View>
        </CardInput>
      </Pressable>

      <Pressable onPress={toggleTheme}>
        <CardInput className='mt-2 p-5'>
            <View className='flex flex-row gap-2'>
              {isDark ? <ToggleLeft color={colors.secondary} /> : <ToggleRight color={colors.secondary} />}
              <BaseTitle isDark={!isDark} title={nameTheme} />
            </View>
        </CardInput>
      </Pressable>

      <Pressable onPress={handleLogout}>
        <CardInput className='mt-2 p-5'>
          <View className='flex flex-row gap-2'>
            <LogoutIcon color={colors.secondary} />
            <BaseTitle isDark={!isDark} title='Sair' />
          </View>
        </CardInput>
      </Pressable>
    </Background>
  );
}