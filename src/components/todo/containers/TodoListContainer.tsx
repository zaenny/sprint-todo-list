'use client';
import TodoForm from '@/components/todo/TodoForm';
import { useCreateTodo, useGetTodos, useUpdateTodo } from '@/hooks/useTodo';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import TodoList from '../TodoList';

const TodoListContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const { data, isLoading, error } = useGetTodos();
  const { mutate: createTodo } = useCreateTodo();
  const { mutate: updateTodo } = useUpdateTodo();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  const todoItems = data?.filter((todo) => !todo.isCompleted) ?? [];
  const doneItems = data?.filter((todo) => todo.isCompleted) ?? [];

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    createTodo({
      data: {
        name: inputValue,
      },
    });
    setInputValue('');
  };

  const handleToggle = (id: number) => {
    const targetTodo = data?.find((todo) => todo.id === id);
    if (!targetTodo) return;

    updateTodo({
      id: id,
      data: {
        name: targetTodo.name,
        isCompleted: !targetTodo.isCompleted,
        memo: targetTodo.memo ?? '',
        imageUrl: targetTodo.imageUrl ?? '',
      },
    });
  };

  const hanldeNameClick = (id: number) => {
    router.push(`items/${id}`);
  };

  return (
    <div className="flex flex-col">
      <TodoForm
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmit={handleSubmit}
      />
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
        <TodoList
          items={todoItems}
          variant="todo"
          onToggle={handleToggle}
          onNameClick={hanldeNameClick}
        />
        <TodoList
          items={doneItems}
          variant="done"
          onToggle={handleToggle}
          onNameClick={hanldeNameClick}
        />
      </div>
    </div>
  );
};

export default TodoListContainer;
