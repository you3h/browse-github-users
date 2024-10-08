import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: { control: 'boolean' },
    isFluid: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
    disabled: false,
    isFluid: false,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    variant: 'secondary',
    disabled: false,
    isFluid: false,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    variant: 'primary',
    disabled: true,
    isFluid: false,
  },
};

export const Fluid: Story = {
  args: {
    text: 'Fluid Button',
    variant: 'primary',
    disabled: false,
    isFluid: true,
  },
};

export const CustomClass: Story = {
  args: {
    text: 'Custom Class Button',
    variant: 'primary',
    disabled: false,
    isFluid: false,
    className: 'border-2 border-red-500',
  },
};
