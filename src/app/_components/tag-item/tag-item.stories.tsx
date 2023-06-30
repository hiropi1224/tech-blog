import type { Meta, StoryObj } from '@storybook/react';

import { TagItem } from '@/app/_components/tag-item/tag-item';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TagItem> = {
  title: 'Component/TagItem',
  component: TagItem,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      id: '1',
      name: 'サンプル',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagItem>;

export const Primary: Story = {
  args: {
    tag: {
      id: '1',
      name: 'sample',
      createdAt: '',
      updatedAt: '',
    },
  },
};
