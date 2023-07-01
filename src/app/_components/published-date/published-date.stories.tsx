import type { Meta, StoryObj } from '@storybook/react';

import { PublishedDate } from './published-date';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PublishedDate> = {
  title: 'Component/PublishedDate',
  component: PublishedDate,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PublishedDate>;

export const Primary: Story = {
  args: {
    date: '2023-06-25T12:46:52.851Z',
  },
};
