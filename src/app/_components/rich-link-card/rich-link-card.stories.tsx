import type { Meta, StoryObj } from '@storybook/react';

import { RichLinkCard } from '@/app/_components/rich-link-card/rich-link-card';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RichLinkCard> = {
  title: 'Component/RichLinkCard',
  component: RichLinkCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RichLinkCard>;

export const Primary: Story = {
  args: {
    url: 'https://zenn.dev/shiro12/articles/b9864707186ad4',
    title: 'React Docs Effectの依存関係を取り除く',
    image:
      'https://res.cloudinary.com/zenn/image/upload/s--jWz9uXha--/c_fit%2Cg_north_west%2Cl_text:notosansjp-medium.otf_55:React%2520Docs%2520Effect%25E3%2581%25AE%25E4%25BE%259D%25E5%25AD%2598%25E9%2596%25A2%25E4%25BF%2582%25E3%2582%2592%25E5%258F%2596%25E3%2582%258A%25E9%2599%25A4%25E3%2581%258F%2Cw_1010%2Cx_90%2Cy_100/g_south_west%2Cl_text:notosansjp-medium.otf_37:shiro%2Cx_203%2Cy_98/g_south_west%2Ch_90%2Cl_fetch:aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3plbm4tdXNlci11cGxvYWQvYXZhdGFyLzhlZGZjM2E2YWEuanBlZw==%2Cr_max%2Cw_90%2Cx_87%2Cy_72/og-base.png',
    site: 'Zenn',
  },
};
