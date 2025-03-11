'use client';

import '../style/loader.css';
import '../style/global.css';

import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  radius?: 'sm' | 'md' | 'lg';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onPress?: () => void;
};

export const Button = React.memo(
  ({
    children,
    variant = 'text',
    radius = 'md',
    size = 'md',
    color = '#3b82f6',
    loading = false,
    fullWidth = false,
    disabled = false,
    onPress,
  }: ButtonProps) => {
    const sizeClasses = {
      sm: 'px-2 text-sm h-[30px] min-w-[80px]',
      md: 'px-3 text-base h-[40px] min-w-[90px]',
      lg: 'px-5 text-xl h-[50px] min-w-[120px]',
    };

    const radiusClasses = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
    };

    const variantClasses = {
      text: `${
        !loading && !disabled
          ? `hover:bg-zinc-200/30 text-[var(--color)]`
          : 'text-zinc-400'
      }`,
      outlined: `${
        !loading && !disabled
          ? `outline outline-2 outline-[var(--color)] text-[var(--color)] hover:bg-zinc-200/30`
          : 'outline outline-2 outline-zinc-300 text-zinc-400'
      }`,
      contained: `${
        !loading && !disabled
          ? `bg-[var(--color)] text-white hover:opacity-90`
          : 'bg-zinc-300 text-zinc-500'
      }`,
    };

    return (
      <button
        onClick={onPress ? onPress : undefined}
        disabled={loading || disabled}
        className={`transition-all select-none flex items-center justify-center ${
          loading ? 'cursor-not-allowed' : !disabled && 'cursor-pointer'
        } ${fullWidth && 'w-full'} ${!disabled && 'active:scale-[95%]'} ${
          sizeClasses[size]
        } ${radiusClasses[radius]} ${variantClasses[variant]} `}
        style={{ '--color': color } as React.CSSProperties}
      >
        {loading ? (
          <div
            className={` ${
              size === 'sm'
                ? 'w-[15px]'
                : size === 'md'
                ? 'w-[20px]'
                : size === 'lg' && 'w-[25px]'
            }`}
          >
            <div className="loader"></div>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);
