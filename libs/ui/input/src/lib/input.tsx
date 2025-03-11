'use client';

import React, { ChangeEvent, useId, useState } from 'react';
import '../style/global.css';

type InputProps = {
  placeHolder?: string;
  variant?: 'normal' | 'bordered';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  fullWidth?: boolean;
  id?: string;
  type?: 'text' | 'number' | 'password';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = React.memo(
  ({
    type = 'text',
    variant = 'normal',
    size = 'md',
    color = '#3b82f6',
    fullWidth = false,
    placeHolder = '',
    id = useId(),
    value,
    onChange,
  }: InputProps) => {
    const [internalInput, setInternalInput] = useState('');
    const input = value !== undefined ? value : internalInput;

    const sizeClasses = {
      sm: `${
        variant === 'normal' ? 'px-0' : variant === 'bordered' && 'px-2'
      } text-sm h-[35px] min-w-[80px]`,
      md: `${
        variant === 'normal' ? 'px-0' : variant === 'bordered' && 'px-3'
      } text-base h-[45px] min-w-[90px]`,
      lg: `${
        variant === 'normal' ? 'px-0' : variant === 'bordered' && 'px-5'
      } text-xl h-[55px] min-w-[120px]`,
    };

    const labelSizeClasses = {
      sm: 'left-1',
      md: 'left-1.5',
      lg: 'left-2.5',
    };

    const variantClasses = {
      normal:
        'border-b-2 border-zinc-300 focus-within:border-[var(--color)] bg-inherit',
      bordered: `border-2 border-zinc-300 focus-within:border-[var(--color)] bg-inherit`,
    };

    const radiusClasses = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    };

    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
      if (value === undefined) setInternalInput(e.target.value);

      onChange?.(e);
    }

    return (
      <div
        className={`transition-all inline-block relative mt-4 cursor-text ${
          variant === 'normal' ? 'mt-4' : 'mt-2'
        } ${variant === 'bordered' && radiusClasses[size]} ${
          variantClasses[variant]
        } ${sizeClasses[size]}  ${fullWidth && 'w-full'}`}
        style={{ '--color': color } as React.CSSProperties}
      >
        <input
          onChange={HandleChange}
          value={input}
          id={id}
          type={type}
          className={`transition-all w-full h-full text-zinc-800 outline-none peer`}
        />
        <label
          htmlFor={id}
          className={`absolute ${
            variant === 'bordered' ? labelSizeClasses[size] : 'left-0'
          } ${variant === 'bordered' && 'px-2'} ${
            input !== ''
              ? '-translate-y-[55%] scale-[85%] -translate-x-2'
              : 'translate-y-[50%]'
          } peer-focus:-translate-x-2 bottom-[50%] peer-focus:-translate-y-[55%] bg-white peer-focus:scale-[85%] peer-focus:text-[var(--color)] transition-all cursor-text text-zinc-400`}
        >
          {placeHolder}
        </label>
      </div>
    );
  }
);
