import type { Meta, StoryObj } from '@storybook/react';

import { TagList } from './tag-list';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TagList> = {
  title: 'Component/TagList',
  component: TagList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TagList>;

export const Primary: Story = {
  args: {
    tags: [
      {
        id: '1',
        name: 'sample1',
        createdAt: '',
        updatedAt: '',
      },
      {
        id: '2',
        name: 'sample2',
        createdAt: '',
        updatedAt: '',
      },
    ],
  },
};
