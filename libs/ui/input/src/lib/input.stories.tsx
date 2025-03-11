import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Input variant="normal" placeHolder="normal" />
      <Input variant="bordered" placeHolder="bordered" />
    </div>
  ),
};

export const size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
        <Input size="sm" variant="bordered" placeHolder="small" />
        <Input size="md" variant="bordered" placeHolder="medium" />
        <Input size="lg" variant="bordered" placeHolder="large" />
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
        <Input size="sm" variant="normal" placeHolder="small" />
        <Input size="md" variant="normal" placeHolder="medium" />
        <Input size="lg" variant="normal" placeHolder="large" />
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
        <Input
          size="lg"
          variant="bordered"
          placeHolder="fullwidth prop"
          fullWidth
        />
      </div>
    </div>
  ),
};

export const color: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Input variant="normal" placeHolder="focus me" color="#009688" />
        <Input variant="bordered" placeHolder="focus me" color="#009688" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Input variant="normal" placeHolder="focus me" color="#8a4af3" />
        <Input variant="bordered" placeHolder="focus me" color="#8a4af3" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Input variant="normal" placeHolder="focus me" color="#ff5722" />
        <Input variant="bordered" placeHolder="focus me" color="#ff5722" />
      </div>
    </div>
  ),
};

export const type: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Input type="text" variant="bordered" placeHolder="Text" />
      <Input type="number" variant="bordered" placeHolder="Number" />
      <Input type="password" variant="bordered" placeHolder="Password" />
    </div>
  ),
};

export const controlled: Story = {
  render: () => {
    const [value, setValue] = useState('some text ...');

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Input
          type="text"
          variant="bordered"
          placeHolder="Text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span>{value}</span>
      </div>
    );
  },
};
