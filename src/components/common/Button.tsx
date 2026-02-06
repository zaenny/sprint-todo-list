import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';

const ButtonVariants = cva(
  'flex items-center rounded-full gap-10 justify-center border-slate-900',
  {
    variants: {
      variant: {
        addDefault: 'bg-slate-300 text-slate-900 shadow-btn-dark border-2',
        addActive: 'bg-violet-600 text-white shadow-btn-dark border-2',
        editDefault: 'bg-slate-300 text-slate-900 shadow-btn-dark border-2',
        editActive: 'bg-lime-300 text-slate-900 shadow-btn-dark border-2',
        delete: 'bg-rose-500 text-white shadow-btn-dark border-2',
      },
      size: {
        small: 'w-56 h-56',
        large:
          'w-56 h-56 md:w-162 lg:w-168 text-sm md:text-base lg:text-lg [&_svg]:w-16 [&_svg]:h-16',
      },
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = ({ variant, size, children, icon, ...props }: ButtonProps) => {
  return (
    <button className={cn(ButtonVariants({ variant, size }))} {...props}>
      {icon}
      <span className="hidden text-base md:inline lg:text-lg">{children}</span>
    </button>
  );
};

export default Button;
