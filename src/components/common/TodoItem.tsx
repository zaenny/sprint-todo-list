import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';
import CheckboxCheckedIcon from '../icons/CheckboxCheckedIcon';
import CheckboxEmptyIcon from '../icons/CheckboxEmptyIcon';

const TodoItemVariants = cva(
  'flex rounded-full border-2 px-24 items-center gap-16',
  {
    variants: {
      variant: {
        todo: '',
        done: 'bg-violet-100',
      },
      size: {
        small: 'w-344 md:w-696 lg:w-588 h-50 text-slate-800',
        large: 'w-343 md:w-696 lg:w-996 h-64 text-salte-900',
      },
    },
    defaultVariants: {
      size: 'small',
      variant: 'todo',
    },
  },
);

interface TodoItemProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof TodoItemVariants> {
  isCompleted?: boolean;
}

const TodoItem = ({
  variant,
  size,
  value,
  isCompleted = false,
  ...props
}: TodoItemProps) => {
  return (
    <div className={cn(TodoItemVariants({ variant, size }))} {...props}>
      <button type="button">
        {isCompleted ? <CheckboxCheckedIcon /> : <CheckboxEmptyIcon />}
      </button>
      <span>{value}</span>
    </div>
  );
};

export default TodoItem;
