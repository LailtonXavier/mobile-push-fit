import ActivityCardWithDate from '@/core/components/ActivityCardWithDate';
import ActivityModal from '@/core/components/ActivityModal';
import BackgroundScroll from '@/core/components/BackgroundScroll';
import Card from '@/core/components/Card';
import Divide from '@/core/components/Divide';
import MediumTitle from '@/core/components/MediumTitle';
import PageTitle from '@/core/components/PageTitle';
import ProgressCircle from '@/core/components/ProgressCircle';
import SemiTitle from '@/core/components/SemiTitle';
import SummaryList from '@/core/components/SummaryList';
import { Activity } from '@/core/domain/entities/activity';
import { useAuthStore } from '@/core/infra/store/useAuthStore';
import useTheme from '@/hooks/useTheme';
import { Redirect } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { countActivitiesByIntensity } from '../types/countActivitiesByIntensity';
import { countActivitiesByName } from '../types/countActivitiesByName';
import { getIntensityText } from '../types/getDarationLabel';
import Button from '@/core/components/Button';

export default function ActivityScreen() {
  const [showModal, setShowModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const { isDark } = useTheme();
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

  const activityCounts = countActivitiesByName(user?.activities ?? []);
  const intensityCounts = countActivitiesByIntensity(user.activities ?? []);

  return (
    <BackgroundScroll>
      <PageTitle title='Atividades' back className='px-6' />
      <View className='flex mt-10 mb-4 px-6 gap-6'>
      <ActivityModal
        visible={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedActivity(null);
        }}
        isDark={isDark}
        activity={selectedActivity}
      />
        <SemiTitle title='Todas atividades' className='text-xl' />
        <ProgressCircle registeredActivities={user?.activities?.length || 0} meta={30}>
          <MediumTitle title='Últimas atividades registradas' className='text-left my-4' />
          <Divide />
          {user.activities?.length ? (
            user.activities.map((item, index) => (
              <ActivityCardWithDate
                key={index}
                data={item}
                onPress={() => {
                  setSelectedActivity(item);
                  setShowModal(true);
                }}
              />
            ))
          ) : (
            <SemiTitle
              title="Nenhuma atividade registrada ainda."
              className="text-sm text-center"
            />
          )}
        </ProgressCircle>

        <Card>
          <SemiTitle title='Resumo das atividades' className='text-2xl my-4' />
          <Divide />
          <MediumTitle className="w-4/4 mt-4 mb-2" title="Atividades mais praticadas" />
          <SummaryList
            isDark={!isDark}
            items={activityCounts.map(({ name, count }) => ({
              label: name,
              value: String(count),
            }))}
          />

          <MediumTitle className="w-4/4 mt-4 mb-2" title="Intensidades" />
          <SummaryList
            isDark={!isDark}
            items={intensityCounts.map(({ label, value }) => ({
              label: getIntensityText(label as Activity['intensity']),
              value: String(value),
            }))}
          />
          <Button 
            title='Nova atividade' 
            className='my-4' 
            onPress={() => setShowModal(true)}
          />
        </Card>
      </View>
    </BackgroundScroll>
  )
}