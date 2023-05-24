import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};
export const Blue: Story = {
  args: {
    ...Primary.args,
    backgroundColor: 'blue'
  },
};
export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large'
  },
};
export const Medium: Story = {
  args: {
    label: 'Button',
    size: 'medium'
  },
};
export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small'
  },
};