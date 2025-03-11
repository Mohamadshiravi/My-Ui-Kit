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
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Switch />
    </div>
  ),
};

export const size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch size="sm" />
      <Switch size="md" />
      <Switch size="lg" />
    </div>
  ),
};

export const color: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Switch
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span style={{ fontWeight: 'bold', fontSize: '20px' }}>
          {checked ? 'on' : 'off'}
        </span>
      </div>
    );
  },
};
