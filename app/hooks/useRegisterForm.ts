import { RegisterUserSchema, RegisterUserSchemaZod } from '@/shared/utils/registerUserSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function useRegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserSchemaZod>({
    resolver: zodResolver(RegisterUserSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
  };
}
