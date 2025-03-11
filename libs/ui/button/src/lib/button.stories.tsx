import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Switch } from '@nx-project/switch';

import { useState } from 'react';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="text">text</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="contained">contained</Button>
    </div>
  ),
};
export const size: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Button variant="text" size="sm">
          small
        </Button>
        <Button variant="text" size="md">
          medium
        </Button>
        <Button variant="text" size="lg">
          large
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outlined" size="sm">
          small
        </Button>
        <Button variant="outlined" size="md">
          medium
        </Button>
        <Button variant="outlined" size="lg">
          large
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="contained" size="sm">
          small
        </Button>
        <Button variant="contained" size="md">
          medium
        </Button>
        <Button variant="contained" size="lg">
          large
        </Button>
      </div>
    </div>
  ),
};
export const radius: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Button variant="text" radius="sm">
          small
        </Button>
        <Button variant="text" radius="md">
          medium
        </Button>
        <Button variant="text" radius="lg">
          large
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outlined" radius="sm">
          small
        </Button>
        <Button variant="outlined" radius="md">
          medium
        </Button>
        <Button variant="outlined" radius="lg">
          large
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="contained" radius="sm">
          small
        </Button>
        <Button variant="contained" radius="md">
          medium
        </Button>
        <Button variant="contained" radius="lg">
          large
        </Button>
      </div>
    </div>
  ),
};
export const color: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-2">
        <Button variant="text" color="#009688">
          press me
        </Button>
        <Button variant="outlined" color="#009688">
          press me
        </Button>
        <Button variant="contained" color="#009688">
          press me
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="text" color="#ff5722">
          press me
        </Button>
        <Button variant="outlined" color="#ff5722">
          press me
        </Button>
        <Button variant="contained" color="#ff5722">
          press me
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="text" color="#8a4af3">
          press me
        </Button>
        <Button variant="outlined" color="#8a4af3">
          press me
        </Button>
        <Button variant="contained" color="#8a4af3">
          press me
        </Button>
      </div>
    </div>
  ),
};

export const disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="text" color="#009688" disabled>
        text
      </Button>
      <Button variant="outlined" color="#8a4af3" disabled>
        outlined
      </Button>
      <Button variant="contained" color="#ff5722" disabled>
        contained
      </Button>
    </div>
  ),
};
export const loading: Story = {
  render: () => {
    const [loading, setLoading] = useState(true);
    return (
      <div className="flex items-center gap-3">
        <Button variant="text" loading={loading}>
          text
        </Button>
        <Button variant="outlined" loading={loading}>
          outlined
        </Button>
        <Button variant="contained" loading={loading}>
          contained
        </Button>
        <div className="px-10">
          <Switch
            onChange={(e) => setLoading(e.target.checked)}
            checked={loading}
            size="sm"
          />
        </div>
      </div>
    );
  },
};
export const withClick: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button
        onPress={() => alert('you press me')}
        variant="contained"
        size="lg"
      >
        text
      </Button>
    </div>
  ),
};
