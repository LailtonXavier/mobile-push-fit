import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CreateActivitychema, CreateActivitychemaZod } from '@/shared/utils/createActivitychema';

export function useCreateActivityForm() {
  const {
    control,
    handleSubmit,
    formState,
    clearErrors,
    setValue,
  } = useForm<CreateActivitychemaZod>({
    resolver: zodResolver(CreateActivitychema),
  });

  return {
    control,
    handleSubmit,
    formState,
    clearErrors,
    setValue,
  };
}
