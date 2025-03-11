'use client';

import React, { ChangeEvent, useId, useState } from 'react';
import '../style/input.scss';

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

    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
      if (value === undefined) setInternalInput(e.target.value);
      onChange?.(e);
    }

    return (
      <div
        className={`input ${variant} ${size} ${fullWidth ? 'full-width' : ''} ${
          input !== '' ? 'active' : ''
        }`}
        style={{ '--color': color } as React.CSSProperties}
      >
        <input
          onChange={HandleChange}
          value={input}
          id={id}
          type={type}
          className="field"
        />
        <label htmlFor={id} className="label">
          {placeHolder}
        </label>
      </div>
    );
  }
);
