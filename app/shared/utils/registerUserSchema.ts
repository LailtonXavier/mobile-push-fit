import { z } from 'zod';

export const RegisterUserSchema = z
  .object({
    email: z.string().min(1, "Campo obrigatório").email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string(),
    photo: z.string().url().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ['confirmPassword'],
  });

export type RegisterUserSchemaZod = z.infer<typeof RegisterUserSchema>;
