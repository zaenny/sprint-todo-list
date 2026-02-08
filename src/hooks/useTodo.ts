import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoApi } from '@/lib/todoApi';
import type { CreateTodoDto, UpdateTodoDto } from '@/types/todo';

// Todo 조회
export const useGetTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => todoApi.getTodos(),
  });
};

// Todo Detail 조회
export const useGetTodo = (id: number) => {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => todoApi.getTodo(id),
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: CreateTodoDto }) => todoApi.createTodo(data),
    onSuccess: (todo) => {
      queryClient.setQueryData(['todos', todo.id], todo);
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

// Todo 수정
export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateTodoDto }) =>
      todoApi.updateTodo(id, data),
    onSuccess: (updatedTodo) => {
      // 캐시 업데이트
      queryClient.setQueryData(['todo', updatedTodo.id], updatedTodo);
      // 목록도 있다면 invalidate
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

// Todo 삭제
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => todoApi.deleteTodo(id),
    onSuccess: (_, deletedId) => {
      // 캐시에서 제거
      queryClient.removeQueries({ queryKey: ['todo', deletedId] });
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

// 이미지 업로드
export const useUploadImage = () => {
  return useMutation({
    mutationFn: (file: File) => todoApi.uploadImage(file),
  });
};
