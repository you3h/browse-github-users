import type { ChangeEvent } from 'react';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export const Input = ({
  name,
  label,
  type = 'text',
  value,
  onChange = undefined,
  placeholder = '',
  error,
}: InputProps) => {
  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label htmlFor={name} className='text-sm font-medium'>
          {label}
        </label>
      )}
      <div className='flex flex-col'>
        <input
          type={type}
          id={name}
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          onChange={onChange}
          className='border border-gray-400 p-2 rounded-md'
        />
        {error && <p className='text-xs text-red-500'>{error}</p>}
      </div>
    </div>
  );
};
