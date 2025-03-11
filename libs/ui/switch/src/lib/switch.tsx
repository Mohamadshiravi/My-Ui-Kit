import React, { ChangeEvent, useState } from 'react';
import '../style/global.css';

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
    const [internalCheked, setInternalChecked] = useState(defaultChecked);
    const isChecked = checked !== undefined ? checked : internalCheked;

    function HandleChange(e: ChangeEvent<HTMLInputElement>) {
      if (checked === undefined) setInternalChecked(e.target.checked);

      onChange?.(e);
    }

    const SizeClasses = {
      sm: [
        'w-[54px] h-[30px]',
        `w-[25px] left-[2px] ${
          isChecked ? 'translate-x-[25px]' : 'translate-x-0'
        }`,
      ],
      md: [
        'w-[74px] h-[40px]',
        `w-[35px] left-[2px] ${
          isChecked ? 'translate-x-[35px]' : 'translate-x-0'
        }`,
      ],
      lg: [
        'w-[92px] h-[50px]',
        `w-[42px] left-[4px] ${
          isChecked ? 'translate-x-[42px]' : 'translate-x-0'
        }`,
      ],
    };

    return (
      <label
        style={{ '--color': color } as React.CSSProperties}
        className={`${isChecked ? 'bg-[var(--color)]' : 'bg-zinc-200'} ${
          SizeClasses[size][0]
        } block rounded-full relative cursor-pointer transition-all`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={HandleChange}
          className="w-0 h-0 absolute"
        />
        <span
          className={`aspect-square shadow-lg bottom-[50%] transition-all translate-y-[50%] bg-white block rounded-full absolute ${SizeClasses[size][1]} `}
        ></span>
      </label>
    );
  }
);
