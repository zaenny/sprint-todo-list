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

export const ImageUploadResponseSchema = z.object({
  url: z.string(),
});

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ENGLISH_FILENAME = /^[a-zA-Z0-9._-]+$/;

export const ImageSchema = z
  .instanceof(File)
  .refine((file) => file.size <= MAX_FILE_SIZE, {
    message: '파일 크기는 5MB 이하여야 합니다.',
  })
  .refine(
    (file) =>
      ENGLISH_FILENAME.test(file.name.split('.').slice(0, -1).join('.')),
    { message: '파일 이름은 영어로만 이루어져야 합니다.' },
  );

export type Todo = z.infer<typeof TodoSchema>;
export type CreateTodoDto = z.infer<typeof CreateTodoSchema>;
export type UpdateTodoDto = z.infer<typeof UpdateTodoSchema>;
export type DeleteResponse = z.infer<typeof DeleteResponseSchema>;
export type ImageUploadResponse = z.infer<typeof ImageUploadResponseSchema>;
