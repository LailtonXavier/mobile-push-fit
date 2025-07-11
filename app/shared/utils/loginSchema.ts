import { z } from 'zod';

export const LoginSchema = z
  .object({
    email: z.string().min(1, "Campo obrigatório").email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  })

export type LoginSchemaZod = z.infer<typeof LoginSchema>;
