import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from './breadcrumb';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Breadcrumb> = {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Primary: Story = {
  args: {
    title: 'title',
  },
};
