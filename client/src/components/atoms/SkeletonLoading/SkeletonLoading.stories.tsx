import type { Meta, StoryObj } from '@storybook/react';
import { SkeletonLoading } from './SkeletonLoading';

const meta: Meta<typeof SkeletonLoading> = {
  title: 'Components/SkeletonLoading',
  component: SkeletonLoading,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonLoading>;

export const CustomSize: Story = {
  args: {
    className: 'w-32 h-8',
  },
};
