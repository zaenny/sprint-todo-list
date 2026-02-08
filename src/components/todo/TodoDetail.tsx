import React, { RefObject } from 'react';
import TodoItem from '@/components/common/TodoItem';
import ImageSection from '@/components/todo/ImageSection';
import MemoSection from '@/components/todo/MemoSection';
import { Todo } from '@/types/todo';
import Button from '../common/Button';
import DeleteIcon from '../icons/DeleteIcon';
import CheckIcon from '../icons/CheckIcon';

interface TodoDetailProps {
  originalTodo: Todo;
  editedTodo: {
    name: string;
    memo: string | null;
    imageUrl: string | null;
    isCompleted: boolean;
  };
  hasChanges: boolean;
  fileInputRef: RefObject<HTMLInputElement | null>;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNameChange: (name: string) => void;
  onToggle: () => void;
  onMemoChange: (newMemo: string) => void;
  onSubmit: () => void;
  onDelete: () => void;
  onImageChange: () => void;
}

const TodoDetail = ({
  originalTodo,
  editedTodo,
  hasChanges,
  fileInputRef,
  onFileSelect,
  onNameChange,
  onToggle,
  onMemoChange,
  onSubmit,
  onDelete,
  onImageChange,
}: TodoDetailProps) => {
  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/gif"
        onChange={onFileSelect}
        className="hidden"
      />
      <TodoItem
        name={editedTodo.name}
        isCompleted={editedTodo.isCompleted}
        id={originalTodo.id}
        variant={editedTodo.isCompleted ? 'detailDone' : 'detailTodo'}
        onToggle={onToggle}
        onNameChange={onNameChange}
      />
      <div className="mt-24 flex flex-col gap-24 lg:flex-row">
        <ImageSection
          className="h-full w-full lg:w-2/5"
          imageUrl={originalTodo.imageUrl}
          onImageChange={onImageChange}
        />
        <MemoSection
          className="h-full w-full lg:w-3/5"
          memo={editedTodo.memo}
          onChange={onMemoChange}
          disabled={hasChanges}
        />
      </div>
      <div className="mt-16 flex justify-center gap-16 lg:justify-end">
        <Button
          onClick={onSubmit}
          size="default"
          icon={<CheckIcon />}
          variant={hasChanges ? 'editActive' : 'editDefault'}
        >
          수정완료
        </Button>
        <Button
          onClick={onDelete}
          variant="delete"
          size="default"
          icon={<DeleteIcon />}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
};

export default TodoDetail;
