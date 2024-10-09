import type { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  keyPress?: {
    key: string;
    onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  };
  placeholder?: string;
  enterKeyHint?:
    | 'search'
    | 'done'
    | 'enter'
    | 'go'
    | 'next'
    | 'previous'
    | 'send';
  error?: string;
}

export const Input = ({
  name,
  label,
  type = 'text',
  value,
  onChange = undefined,
  keyPress = undefined,
  placeholder = '',
  enterKeyHint = undefined,
  error,
}: InputProps) => {
  const handleKeyPress = (e?: KeyboardEvent<HTMLInputElement>) => {
    if (keyPress && e?.key === keyPress.key && keyPress.onKeyPress) {
      keyPress.onKeyPress(e);
    }
  };

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
          onKeyUp={(e) => handleKeyPress(e)}
          className='border border-gray-400 p-2 rounded-md'
          enterKeyHint={enterKeyHint}
        />
        {error && <p className='text-xs text-red-500'>{error}</p>}
      </div>
    </div>
  );
};
