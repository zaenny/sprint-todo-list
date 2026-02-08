import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import CheckboxCheckedIcon from '../icons/CheckboxCheckedIcon';
import CheckboxEmptyIcon from '../icons/CheckboxEmptyIcon';

const TodoItemVariants = cva(
  'flex rounded-full border-2 px-12 items-center w-full h-50 text-slate-800',
  {
    variants: {
      variant: {
        todo: '',
        done: 'bg-violet-100 line-through',
      },
    },
    defaultVariants: {
      variant: 'todo',
    },
  },
);

interface TodoItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
  onToggle?: () => void;
  onNameClick?: () => void;
}

const TodoItem = ({
  name,
  isCompleted,
  onToggle,
  onNameClick,
}: TodoItemProps) => {
  return (
    <div
      className={cn(
        TodoItemVariants({ variant: isCompleted ? 'done' : 'todo' }),
      )}
    >
      <button type="button" onClick={onToggle}>
        {isCompleted ? <CheckboxCheckedIcon /> : <CheckboxEmptyIcon />}
      </button>
      <span className="ml-16 truncate" onClick={onNameClick}>
        {name}
      </span>
    </div>
  );
};

export default TodoItem;
