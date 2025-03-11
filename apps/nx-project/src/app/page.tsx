'use client';

import { Button } from '@nx-project/button';
import { Input } from '@nx-project/input';
import { Switch } from '@nx-project/switch';

import { useState } from 'react';
export default function Index() {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <section className="w-full bg-white h-screen flex items-center justify-center flex-wrap gap-10">
      <div className="flex flex-col gap-3 items-center justify-between border p-4 rounded-md h-[300px]">
        <span className="text-3xl font-bold text-zinc-700">Button</span>
        <Button variant="text">text</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="contained">contained</Button>
        <span className="text-zinc-800">
          run <span className="px-1 font-bold">"nx run button:storybook"</span>{' '}
          to see storybook
        </span>
      </div>
      <div className="flex flex-col gap-3 items-center justify-between border p-4 rounded-md h-[300px]">
        <span className="text-3xl font-bold text-zinc-700">Input</span>
        <Input variant="bordered" placeHolder="normal" size="sm" />
        {/* <Input variant="bordered" placeHolder="bordered" /> */}
        <span className="text-zinc-800">
          run <span className="px-1 font-bold">"nx run input:storybook"</span>{' '}
          to see storybook
        </span>
      </div>
      <div className="flex flex-col gap-3 items-center justify-between border p-4 rounded-md h-[300px]">
        <span className="text-3xl font-bold text-zinc-700">Switch</span>
        <Switch />

        <span className="text-zinc-800">
          run <span className="px-1 font-bold">"nx run switch:storybook"</span>{' '}
          to see storybook
        </span>
      </div>
    </section>
  );
}
