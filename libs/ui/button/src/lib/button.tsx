import '../style/Button.scss';
import '../style/variables.scss';
import '../style/loader.css';
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
    return (
      <button
        onClick={onPress}
        disabled={loading || disabled}
        className={`button variant-${variant} radius-${radius} size-${size} ${
          fullWidth ? 'fullWidth' : ''
        } ${disabled || loading ? 'disabled' : ''}`}
        style={{ '--primary-color': color } as React.CSSProperties}
      >
        {loading ? (
          <div
            className={
              size === 'sm'
                ? 'w-[15px]'
                : size === 'md'
                ? 'w-[20px]'
                : size === 'lg'
                ? 'w-[25px]'
                : ''
            }
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
