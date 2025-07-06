import { z } from 'zod';

export const DeleteAccountSchema = z
  .object({
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  })

export type DeleteAccountSchemaZod = z.infer<typeof DeleteAccountSchema>;
