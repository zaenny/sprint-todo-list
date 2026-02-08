import { Todo } from '@/types/todo';
import Image from 'next/image';
import emptyTodoImg from '@/assets/image/emptyTodoImg.png';
import emptyDoneImg from '@/assets/image/emptyDoneImg.png';
import doneImg from '@/assets/image/doneImg.png';
import todoImg from '@/assets/image/todoImg.png';
import TodoItem from '../common/TodoItem';

interface TodoListProps {
  variant: 'todo' | 'done';
  items: Todo[];
  onToggle: (id: number) => void;
  onNameClick: (id: number) => void;
}

const TodoList = ({ variant, items, onToggle, onNameClick }: TodoListProps) => {
  return (
    <div className="flex w-full flex-1 flex-col">
      <div className="mt-24 md:mt-40">
        <Image
          src={variant === 'todo' ? todoImg : doneImg}
          alt={variant === 'todo' ? 'Todo' : 'Done'}
          className="h-36 w-100"
        />
      </div>
      {items.length > 0 ? (
        <div className="mt-16 flex flex-col gap-16">
          {items.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              name={item.name}
              isCompleted={item.isCompleted}
              variant={item.isCompleted ? 'done' : 'todo'}
              onToggle={() => onToggle(item.id)}
              onNameClick={() => onNameClick(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-16 md:gap-24">
          <Image
            src={variant === 'todo' ? emptyTodoImg : emptyDoneImg}
            alt={variant === 'todo' ? 'Todo' : 'Done'}
            className="h-120 w-120 md:h-240 md:w-240"
          />
          <p className="text-center whitespace-pre-line text-slate-400">
            {variant === 'todo'
              ? '할 일이 없어요.\nTODO를 새롭게 추가해주세요!'
              : '아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요!'}
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
