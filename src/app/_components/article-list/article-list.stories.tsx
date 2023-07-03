import type { Meta, StoryObj } from '@storybook/react';

import { ArticleList } from './article-list';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ArticleList> = {
  title: 'Component/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Primary: Story = {
  args: {
    articles: [
      {
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
    ],
  },
};
