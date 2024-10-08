import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: 'Accordion Title',
    children: (
      <div>
        <p>
          This is the content inside the accordion. You can put any content
          here, like text, images, or even other components.
        </p>
      </div>
    ),
  },
};

export const LongContent: Story = {
  args: {
    title: 'Accordion with Long Content',
    children: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          velit id leo condimentum vestibulum. Aenean et mi neque. Sed
          ullamcorper sagittis justo, vitae dictum tortor posuere non. Nam eget
          orci quis quam bibendum aliquet.
        </p>
        <p>
          Vivamus non malesuada augue, ac venenatis mi. Curabitur eget mi
          tristique, convallis ligula vel, maximus nisl. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
        <p>
          Suspendisse potenti. Morbi euismod risus in orci vehicula pharetra.
          Morbi tincidunt sapien nec ex interdum, sit amet lacinia lacus
          dapibus. Donec tempor ex et mi interdum consequat.
        </p>
      </div>
    ),
  },
};
