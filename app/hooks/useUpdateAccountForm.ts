import { UpdateUserSchema, UpdateUserSchemaZod } from '@/shared/utils/updateUserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function useUpdateAccountForm() {
  const {
    control,
    handleSubmit,
    formState,
    clearErrors,
    setValue,
  } = useForm<UpdateUserSchemaZod>({
    resolver: zodResolver(UpdateUserSchema),
  });

  return {
    control,
    handleSubmit,
    formState,
    clearErrors,
    setValue,
  };
}
