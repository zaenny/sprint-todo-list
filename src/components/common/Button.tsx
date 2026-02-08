import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';

const ButtonVariants = cva(
  'flex items-center rounded-full gap-10 justify-center border-slate-900',
  {
    variants: {
      variant: {
        addDefault: 'bg-slate-200 text-slate-900 shadow-btn-dark border-2',
        addActive: 'bg-violet-600 text-white shadow-btn-dark border-2',
        editDefault: 'bg-slate-300 text-slate-900 shadow-btn-dark border-2',
        editActive: 'bg-lime-300 text-slate-900 shadow-btn-dark border-2',
        imageUpload: 'bg-slate-200',
        imageEdit: 'bg-slate-900/50',
        delete: 'bg-rose-500 text-white shadow-btn-dark border-2',
      },
      size: {
        default:
          'w-162 h-56 lg:w-168 text-sm md:text-base lg:text-lg [&_svg]:w-16 [&_svg]:h-16',
        add: 'w-56 h-56 md:w-162 lg:w-168 text-sm md:text-base lg:text-lg [&_svg]:w-16 [&_svg]:h-16',
        imageUpload: 'w-64 h-64',
      },
    },
    defaultVariants: { size: 'default' },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  variant,
  size,
  children,
  icon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size }), className)}
      {...props}
    >
      {icon}
      {children && (
        <span
          className={cn(
            size === 'add' && 'hidden',
            'text-base md:inline lg:text-lg',
          )}
        >
          {children}
        </span>
      )}
    </button>
  );
};

export default Button;
