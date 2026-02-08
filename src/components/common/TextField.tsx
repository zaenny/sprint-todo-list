import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React, { InputHTMLAttributes } from 'react';

const TextFieldVariants = cva('flex rounded-full border-2 w-full', {
  variants: {
    variant: {
      search: [
        ' h-56 bg-slate-100 shadow-btn-dark px-24',
        ' text-slate-800 placeholder:text-slate-500',
      ],
    },
  },
});

interface TextFieldProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof TextFieldVariants> {}

const TextField = ({ variant, ...props }: TextFieldProps) => {
  return (
    <input
      className={cn(
        TextFieldVariants({
          variant,
        }),
      )}
      {...props}
    ></input>
  );
};

export default TextField;
