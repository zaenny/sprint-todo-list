'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ImageSchema } from '@/types/todo';
import {
  useDeleteTodo,
  useGetTodo,
  useUpdateTodo,
  useUploadImage,
} from '@/hooks/useTodo';
import { useRouter } from 'next/navigation';
import TodoDetail from '../TodoDetail';

const EDITABLE_KEYS = ['name', 'memo', 'imageUrl', 'isCompleted'] as const;

interface TodoDetailContainerProps {
  id: number;
}

const TodoDetailContainer = ({ id }: TodoDetailContainerProps) => {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: originalTodo, isLoading, error } = useGetTodo(id);
  const updateMutation = useUpdateTodo();
  const deleteMutation = useDeleteTodo();
  const uploadMutation = useUploadImage();

  const [editedTodo, setEditedTodo] = useState<{
    name: string;
    memo: string | null;
    imageUrl: string | null;
    isCompleted: boolean;
  } | null>(null);

  useEffect(() => {
    if (originalTodo) {
      setEditedTodo({
        name: originalTodo.name,
        memo: originalTodo.memo,
        imageUrl: originalTodo.imageUrl,
        isCompleted: originalTodo.isCompleted,
      });
    }
  }, [originalTodo]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>로딩 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">데이터를 불러오는데 실패했습니다.</p>
      </div>
    );
  }

  if (!originalTodo || !editedTodo) {
    return null;
  }

  const hasChanges = EDITABLE_KEYS.some(
    (key) => editedTodo[key] !== originalTodo[key],
  );

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationResult = ImageSchema.safeParse(file);

    if (!validationResult.success) {
      const errorMessage = validationResult.error.message;
      alert(errorMessage);
      e.target.value = '';
      return;
    }

    try {
      const result = await uploadMutation.mutateAsync(file);

      setEditedTodo((prev) =>
        prev ? { ...prev, imageUrl: result.url } : prev,
      );

      alert('이미지가 업로드되었습니다.');
    } catch (error) {
      console.error('이미지 업로드 실패:', error);
      alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
    } finally {
      e.target.value = '';
    }
  };

  const handleNameChange = (newName: string) => {
    setEditedTodo((prev) => (prev ? { ...prev, name: newName } : prev));
  };

  const handleToggle = () => {
    setEditedTodo((prev) =>
      prev ? { ...prev, isCompleted: !prev.isCompleted } : prev,
    );
  };

  const handleMemoChange = (newMemo: string) => {
    setEditedTodo((prev) => (prev ? { ...prev, memo: newMemo } : prev));
  };

  const handleSubmit = async () => {
    if (!hasChanges) return;

    try {
      await updateMutation.mutateAsync({
        id: originalTodo.id,
        data: {
          name: editedTodo.name,
          memo: editedTodo.memo,
          imageUrl: editedTodo.imageUrl,
          isCompleted: editedTodo.isCompleted,
        },
      });

      alert('수정이 완료되었습니다.');
      router.push('/');
    } catch (error) {
      console.error('수정 실패:', error);
      alert('수정에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleDelete = async () => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteMutation.mutateAsync(originalTodo.id);
      alert('삭제되었습니다.');
      router.push('/');
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const handleImageChange = () => {
    fileInputRef.current?.click();
  };

  return (
    <TodoDetail
      originalTodo={originalTodo}
      editedTodo={editedTodo}
      hasChanges={hasChanges}
      fileInputRef={fileInputRef}
      onFileSelect={handleFileSelect}
      onNameChange={handleNameChange}
      onToggle={handleToggle}
      onMemoChange={handleMemoChange}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      onImageChange={handleImageChange}
    />
  );
};

export default TodoDetailContainer;
