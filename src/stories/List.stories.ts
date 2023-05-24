import type { Meta, StoryObj } from '@storybook/react';

import { List } from './List';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/List',
  component: List,
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['disc', 'decimal', 'none'],
    },
    className: { control: 'text' },
  },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Bullet: Story = {
  args: {
    style: 'disc',
    // className: 'list-disc',
  },
};
export const BulletAndClass: Story = {
  args: {
    ...Bullet.args,
    className: 'text-red-500'
  },
};
export const AnyClass: Story = {
  args: {
    className: 'list-disc text-blue-500'
  },
};
export const Number: Story = {
  args: {
    style: 'decimal'
  },
};
export const None: Story = {
  args: {
    style: 'none'
  },
};