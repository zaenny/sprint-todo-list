/**
 * Todo API 클라이언트
 * 할 일 목록 CRUD 기능 제공
 */
import { apiClient } from '@/lib/api';
import {
  type Todo,
  type CreateTodoDto,
  type UpdateTodoDto,
  type DeleteResponse,
  type ImageUploadResponse,
  ImageUploadResponseSchema,
  DeleteResponseSchema,
  TodoSchema,
} from '@/types/todo';
import z from 'zod';

export const todoApi = {
  /**
   * 전체 todo 조회
   * @returns Todo 배열
   */
  async getTodos(): Promise<Todo[]> {
    const { data } = await apiClient.get('/items');
    return data;
  },

  /**
   * 특정 todo 조회
   * @param itemId - 조회할 ID
   * @returns Todo객체
   */
  async getTodo(itemId: number): Promise<Todo> {
    const { data } = await apiClient.get(`/items/${itemId}`);
    return TodoSchema.parse(data);
  },

  /**
   * todo 생성
   * @param dto
   * @returns 생성된 todo 객체
   */
  async createTodo(dto: CreateTodoDto): Promise<Todo> {
    const { data } = await apiClient.post('/items', dto);
    return data;
  },

  /**
   * todo 수정
   * @param itemId
   * @param dto
   * @returns 수정된 todo 객체
   */
  async updateTodo(itemId: number, dto: UpdateTodoDto): Promise<Todo> {
    const { data } = await apiClient.patch(`/items/${itemId}`, dto);
    return TodoSchema.parse(data);
  },

  /**
   * todo삭제
   * @param itemId
   * @returns 삭제 message
   */
  async deleteTodo(itemId: number): Promise<{ message: string }> {
    const { data } = await apiClient.delete(`/items/${itemId}`);
    return DeleteResponseSchema.parse(data);
  },

  /**
   * 이미지 업로드
   * @param file
   * @returns url
   */
  async uploadImage(file: File): Promise<ImageUploadResponse> {
    const formData = new FormData();
    formData.append('image', file);

    const { data } = await apiClient.post('/images/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return ImageUploadResponseSchema.parse(data);
  },
};
