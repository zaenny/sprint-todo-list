import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import CheckboxCheckedIcon from '../icons/CheckboxCheckedIcon';
import CheckboxEmptyIcon from '../icons/CheckboxEmptyIcon';

const TodoItemVariants = cva(
  'flex rounded-full border-2 px-12 items-center w-full h-50 text-slate-800',
  {
    variants: {
      variant: {
        todo: '',
        done: 'bg-violet-100 line-through',
        detailTodo: 'bg-white justify-center',
        detailDone: 'bg-violet-100 justify-center underline',
      },
    },
    defaultVariants: {
      variant: 'todo',
    },
  },
);

interface TodoItemProps extends VariantProps<typeof TodoItemVariants> {
  id: number;
  name: string;
  isCompleted: boolean;
  onToggle?: () => void;
  onNameClick?: () => void;
  onNameChange?: (name: string) => void;
}

const TodoItem = ({
  name,
  variant,
  isCompleted,
  onToggle,
  onNameClick,
  onNameChange,
}: TodoItemProps) => {
  return (
    <div className={cn(TodoItemVariants({ variant }))}>
      <button type="button" onClick={onToggle}>
        {isCompleted ? <CheckboxCheckedIcon /> : <CheckboxEmptyIcon />}
      </button>
      {onNameChange ? (
        <input
          className="ml-16 w-full bg-transparent outline-none"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      ) : (
        <span className="ml-16 truncate" onClick={onNameClick}>
          {name}
        </span>
      )}
    </div>
  );
};

export default TodoItem;
