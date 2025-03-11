import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@nx-project/switch';

import { useState } from 'react';

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Switch',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const defaultSwitch: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch />
    </div>
  ),
};
export const size: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),
};

export const color: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch color="#009688" defaultChecked />
      <Switch color="#ff5722" defaultChecked />
      <Switch color="#8a4af3" defaultChecked />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex items-center gap-10">
        <Switch
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span className="font-bold text-xl">{checked ? 'on' : 'off'}</span>
      </div>
    );
  },
};
