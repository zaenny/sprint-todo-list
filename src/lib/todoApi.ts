/**
 * Todo API 클라이언트
 * 할 일 목록 CRUD 기능 제공
 */
import { apiClient } from '@/lib/api';
import type { Todo, CreateTodoDto, UpdateTodoDto } from '@/type/todo';

/**
 * 전체 todo 조회
 * @returns Todo 배열
 */
export const getTodos = async (): Promise<Todo[]> => {
  const { data } = await apiClient.get('/itmes');
  return data;
};

/**
 * 특정 todo 조회
 * @param itemId - 조회할 ID
 * @returns Todo객체
 */
export const getTodo = async (itemId: number): Promise<Todo> => {
  const { data } = await apiClient.get(`/items/${itemId}`);
  return data;
};

/**
 * todo 생성
 * @param dto
 * @returns 생성된 todo 객체
 */
export const createTodo = async (dto: CreateTodoDto): Promise<Todo> => {
  const { data } = await apiClient.post('/items', dto);
  return data;
};

/**
 * todo 수정
 * @param itemId
 * @param dto
 * @returns 수정된 todo 객체
 */
export const updateTodo = async (
  itemId: string,
  dto: UpdateTodoDto,
): Promise<Todo> => {
  const { data } = await apiClient.patch(`/items/${itemId}`, dto);
  return data;
};

/**
 * todo삭제
 * @param itemId
 * @returns 삭제 message
 */
export const deleteTodo = async (
  itemId: number,
): Promise<{ message: string }> => {
  const { data } = await apiClient.delete(`/items/${itemId}`);
  return data;
};
