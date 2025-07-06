import { ActivityIntensity } from '@/core/domain/types/activity-intensity-types';
import { CreateActivityDto } from '@/core/domain/types/activity-types';
import { useCreateActivityForm } from '@/hooks/useCreateActivityForm';
import useTheme from '@/hooks/useTheme';
import { X } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  Image,
  Keyboard,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import BaseTitle from '../BaseTitle';
import CustomSelect from '../CustomSelect';
import SemiTitle from '../SemiTitle';
import { durationMap, durationOptions, intensityMap, intensityOptions } from './constants';
import { useCreateActivity } from '@/hooks/useCreateActivity';
import { Activity } from '@/core/domain/entities/activity';
import { useUpdateActivity } from '@/hooks/useUpdateActivity';
import { useDeleteActivity } from '@/hooks/useDeleteActivity';
import DeleteButton from '../DeleteButton';
import Button from '../Button';

interface ActivityModalProps {
  visible: boolean;
  onClose: () => void;
  isDark: boolean;
  activity?: Activity | null;
}

interface handleActivityProps {
  name: string
  duration: string
  intensity: string
}

export default function ActivityModal({ visible, onClose, isDark, activity }: ActivityModalProps) {
  const [modalHeight, setModalHeight] = useState(activity ? 440 : 390);

  const { control, handleSubmit, formState: { errors }, clearErrors, setValue } = useCreateActivityForm();
  const {colors} = useTheme()
  const { mutate: createActivity, isPending } = useCreateActivity();
  const { mutate: updateActivity, isPending: isUpdating } = useUpdateActivity();
  const { mutate: deleteActivity, isPending: isDeleting } = useDeleteActivity();

  
  useEffect(() => {
    if (activity) {
      setModalHeight(440)
      setValue('name', activity.name);
      setValue('intensity', Object.keys(intensityMap).find(key => intensityMap[key as keyof typeof intensityMap] === activity.intensity) || '');
      setValue('duration', Object.keys(durationMap).find(key => durationMap[key as keyof typeof durationMap] === activity.duration) || '');
    }
  }, [activity, setValue]);
  
  useEffect(() => {
    const errorFields = Object.keys(errors);
    
    if (errorFields.length > 0) {
      setModalHeight(460)
      const timeout = setTimeout(() => {
        errorFields.forEach((field) => {
          setModalHeight(activity ? 440 : 390)
          clearErrors(field as any);
        });
      }, 2000);
      
      return () => clearTimeout(timeout);
    }
  }, [errors, clearErrors]);
  
  const handleActivity = (data: handleActivityProps) => {
    const duration = durationMap[data.duration as keyof typeof durationMap] as number;
    const intensity = intensityMap[data.intensity as keyof typeof intensityMap] as ActivityIntensity;
  
    const paramsActivity: CreateActivityDto = {
      name: data.name,
      duration,
      intensity,
      distance: 0,
      photo: '',
    };
  
    if (activity?.id) {
      updateActivity({ data: paramsActivity, activityId: activity.id });
      onClose()
    } else {
      createActivity(paramsActivity);
    }
  };

  const handleDeleteActivity = () => {
    if(activity?.id) {
      deleteActivity(activity.id)
      onClose()
    }
  }

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-end">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              className={`${isDark ? 'bg-card-light' : 'bg-card-dark'} rounded-t-2xl p-6`}
              style={{ height: modalHeight }}
            >
              <View className="flex flex-row justify-between items-center mb-2">
                <SemiTitle
                  title="Registre sua atividade"
                  className="text-2xl"
                />
                <Pressable onPress={onClose}>
                  {isDark ? 
                    <Image
                      source={require('@assets/images/close.png')}
                      resizeMode="contain"
                    />
                    : <X color={colors.primary} />
                  }
                </Pressable>
              </View>

              <View className='flex items-start w-full'>
                <BaseTitle isDark={!isDark} title='Nome' className='mt-2 mb-1' />
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value } }) => (
                      <TextInput
                        className={`border border-gray-300 pl-3 ${isDark ? 'text-text-light' : 'text-text-dark'} rounded-md px-3 py-3 w-full` }
                        placeholder="Corrida, natação, musculação..."
                        placeholderTextColor={'#737373'}
                        value={value}
                        onChangeText={onChange}
                        onFocus={() => setModalHeight(500)}
                        onBlur={() => {
                          onBlur();
                          setModalHeight(activity ? 440 : 390);
                        }}
                      />
                    )}
                  />
                  {errors.name && (
                    <Text className="text-red-500 text-base font-sans">
                      {errors.name.message}
                    </Text>
                  )}

                <Controller
                  control={control}
                  name="intensity"
                  render={({ field: { value, onChange } }) => (
                    <CustomSelect
                      label="Intensidade"
                      value={value}
                      options={intensityOptions}
                      onSelect={onChange}
                    />
                  )}
                />
                {errors.intensity && (
                  <Text className="text-red-500 text-base font-sans">
                    {errors.intensity.message}
                  </Text>
                )}

                <Controller
                  control={control}
                  name="duration"
                  render={({ field: { value, onChange } }) => (
                    <CustomSelect
                      label="Duração"
                      value={value}
                      options={durationOptions}
                      onSelect={onChange}
                    />
                  )}
                />
                {errors.duration && (
                  <Text className="text-red-500 text-base font-sans">
                    {errors.duration.message}
                </Text>
                )}
              </View>
              {activity?.id &&
                <DeleteButton className='mt-4 w-56' onPress={handleDeleteActivity} />
              }
              <Button
                title={activity ? 'Editar atividade' : 'Registrar atividade'}
                className='mt-6'
                disabled={isPending || isUpdating || isDeleting}
                onPress={handleSubmit(handleActivity)}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
