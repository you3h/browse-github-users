import type { Meta, StoryObj } from '@storybook/react';
import { UserNameWithAvatar } from './UserNameWithAvatar';

const meta: Meta<typeof UserNameWithAvatar> = {
  title: 'Components/UserNameWithAvatar',
  component: UserNameWithAvatar,
  argTypes: {
    userName: { control: 'text' },
    avatarUrl: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof UserNameWithAvatar>;

export const Default: Story = {
  args: {
    userName: 'John Doe',
    avatarUrl: 'https://via.placeholder.com/32',
  },
};

export const MissingAvatar: Story = {
  args: {
    userName: 'Anonymous User',
    avatarUrl: '',
  },
};
