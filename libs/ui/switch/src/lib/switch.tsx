'use client';

import React, { ChangeEvent, useState } from 'react';
import '../style/switch.scss';

type SwitchProps = {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  defaultChecked?: boolean;
};

export const Switch = React.memo(
  ({
    size = 'md',
    color = '#3b82f6',
    onChange,
    checked,
    defaultChecked = false,
  }: SwitchProps) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isChecked = checked !== undefined ? checked : internalChecked;

    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
      if (checked === undefined) setInternalChecked(e.target.checked);
      onChange?.(e);
    }

    return (
      <label
        style={{ '--color': color } as React.CSSProperties}
        className={`switch ${size} ${isChecked ? 'checked' : ''}`}
      >
        <input type="checkbox" checked={isChecked} onChange={HandleChange} />
        <span className="slider"></span>
      </label>
    );
  }
);
