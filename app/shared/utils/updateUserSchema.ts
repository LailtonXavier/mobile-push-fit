import { z } from 'zod';

export const UpdateUserSchema = z.object({
  name: z.string().min(2, "Campo obrigatório").optional(),
  email: z.string().email("E-mail inválido").optional(),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").optional(),
  photo: z.string().url().optional(),
}).refine((data) => data.name || data.email || data.password || data.photo, {
  message: "Pelo menos um campo deve ser preenchido",
});

export type UpdateUserSchemaZod = z.infer<typeof UpdateUserSchema>;
