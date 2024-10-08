import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
    },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: 'defaultInput',
    label: 'Default Input',
    placeholder: 'Type something...',
  },
};

export const WithValue: Story = {
  args: {
    name: 'valueInput',
    label: 'Input with Value',
    value: 'Initial Value',
    placeholder: 'Type something...',
  },
};

export const ErrorState: Story = {
  args: {
    name: 'errorInput',
    label: 'Input with Error',
    placeholder: 'Type something...',
    error: 'This field is required.',
  },
};

export const PasswordInput: Story = {
  args: {
    name: 'passwordInput',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const EmailInput: Story = {
  args: {
    name: 'emailInput',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
  },
};
