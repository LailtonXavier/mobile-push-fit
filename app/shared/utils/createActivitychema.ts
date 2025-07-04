import { z } from 'zod';

export const CreateActivitychema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"), 
  duration: z.string({
    required_error: 'Duração é obrigatória',
    invalid_type_error: 'Duração inválida',
  }).min(1, "Duração deve ser maior que zero"),
  intensity: z.string({
    errorMap: () => ({ message: 'Intensidade inválida. Selecione uma opção válida.' }),
  }),
  distance: z.string().optional(),
  photo: z.string().url().optional(),
});



export type CreateActivitychemaZod = z.infer<typeof CreateActivitychema>;
