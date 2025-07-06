import ActivityCard from '@/core/components/ActivityCard';
import Background from '@/core/components/Background';
import Card from '@/core/components/Card';
import Divide from '@/core/components/Divide';
import MediumTitle from '@/core/components/MediumTitle';
import PageTitle from '@/core/components/PageTitle';
import ProgressCircle from '@/core/components/ProgressCircle';
import RegisterActivityModal from '@/core/components/ActivityModal';
import SemiTitle from '@/core/components/SemiTitle';
import { useAuthStore } from '@/core/infra/store/useAuthStore';
import useTheme from '@/hooks/useTheme';
import { Redirect, router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, FlatList, TouchableHighlight, View } from 'react-native';
import { Activity } from '@/core/domain/entities/activity';
import Button from '@/core/components/Button';

export default function HomeScreen() {
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  
  const { isDark, colors } = useTheme();
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return (
        <View className={`flex-1 justify-center items-center ${isDark ? 'bg-background-light' : 'bg-background-dark'}`}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/(pages)/register" />;
  }

  const handleBack = () => {
    router.push('/(pages)/activity');
  };

  return (
    <Background className='flex-1'>
      <PageTitle title='Início' className='px-6'/>
      <View className='flex mt-10 px-6 gap-6'>
        <SemiTitle title='Suas atividades' className='text-xl' />
        <ProgressCircle registeredActivities={user.activities?.length || 0} meta={30} />
         <Card className='gap-6'>
          <MediumTitle title='Resumo das atividades' className='text-center' />
          <Divide />
          <FlatList
            data={user.activities}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <ActivityCard 
                data={item}   
                onPress={() => {
                  setSelectedActivity(item);
                  setShowModal(true);
                }}/>
            )}
            contentContainerStyle={{ gap: 12, paddingBottom: 10 }}
            style={{ maxHeight: 160 }}
            showsVerticalScrollIndicator
            ListEmptyComponent={
              <SemiTitle
                title="Nenhuma atividade registrada ainda."
                className="text-sm text-center"
              />
            }
          />
          <Button title='Nova atividade' onPress={() => setShowModal(true)} />
          <TouchableHighlight onPress={handleBack} underlayColor={colors.primary}>
            <SemiTitle className='underline' title='ver todas as atividades' />
          </TouchableHighlight>
        </Card>
      </View>
      <RegisterActivityModal
        visible={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedActivity(null);
        }}
        isDark={isDark}
        activity={selectedActivity}
      />
    </Background>
  )
}