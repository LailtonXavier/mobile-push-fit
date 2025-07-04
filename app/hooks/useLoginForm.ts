import { LoginSchema, LoginSchemaZod } from '@/shared/utils/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function useLoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaZod>({
    resolver: zodResolver(LoginSchema),
  });

  return {
    control,
    handleSubmit,
    errors,
  };
}
