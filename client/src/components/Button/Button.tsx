import type { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  text: string;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  isFluid?: boolean;
  className?: string;
}

export const Button = ({
  text,
  onClick,
  variant = 'primary',
  disabled = false,
  isFluid = false,
  className = '',
}: ButtonProps) => {
  const BUTTON_VARIANTS = {
    primary: 'hover:bg-blue-600 active:bg-blue-700 bg-blue-500',
    secondary: 'hover:bg-green-600 active:bg-green-700 bg-green-500',
  };

  return (
    <button
      className={twMerge(
        'py-2 px-6 rounded-md text-white font-thin w-max',
        isFluid && 'w-full',
        disabled ? 'bg-gray-500' : BUTTON_VARIANTS[variant],
        className
      )}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
