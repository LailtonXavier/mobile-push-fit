import { DeleteAccountSchema, DeleteAccountSchemaZod } from '@/shared/utils/deleteAccountSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function useDeleteAccountForm() {
  const {
    control,
    handleSubmit,
    formState,
    clearErrors,
    setValue,
  } = useForm<DeleteAccountSchemaZod>({
    resolver: zodResolver(DeleteAccountSchema),
  });

  return {
    control,
    handleSubmit,
    formState,
    clearErrors,
    setValue,
  };
}
