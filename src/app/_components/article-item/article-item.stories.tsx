import type { Meta, StoryObj } from '@storybook/react';

import { ArticleItem } from './article-item';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ArticleItem> = {
  title: 'Component/ArticleItem',
  component: ArticleItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleItem>;

export const Primary: Story = {
  args: {
    article: {
      id: 'id',
      createdAt: '2023-06-25T12:41:23.622Z',
      updatedAt: '2023-06-29T14:19:30.836Z',
      publishedAt: '2023-06-25T12:46:52.851Z',
      revisedAt: '2023-06-29T14:19:30.836Z',
      title: 'sample',
      content: '',
      description: 'description',
      toc_visible: false,
    },
  },
};
