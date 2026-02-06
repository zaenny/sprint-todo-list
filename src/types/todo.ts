import { z } from 'zod';

export const TodoSchema = z.object({
  id: z.number(),
  tenantId: z.string(),
  name: z.string(),
  memo: z.string().nullable(),
  imageUrl: z.string().nullable(),
  isCompleted: z.boolean(),
});

export const CreateTodoSchema = z.object({
  name: z.string(),
});

export const UpdateTodoSchema = z.object({
  name: z.string(),
  memo: z.string().nullable(),
  imageUrl: z.string().nullable(),
  isCompleted: z.boolean(),
});

export const DeleteResponseSchema = z.object({
  message: z.string(),
});

export type Todo = z.infer<typeof TodoSchema>;
export type CreateTodoDto = z.infer<typeof CreateTodoSchema>;
export type UpdateTodoDto = z.infer<typeof UpdateTodoSchema>;
export type DeleteResponse = z.infer<typeof DeleteResponseSchema>;
