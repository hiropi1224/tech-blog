import { ArticleList } from '@/app/_components/article-list';
import { getList } from '@/app/_libs/microcms';

type Props = {
  params: {
    tagId: string;
  };
};

export const revalidate = 600;

export default async function Page({ params }: Props) {
  const { tagId } = params;
  const data = await getList({
    limit: 30,
    filters: `tags[contains]${tagId}`,
  });

  return (
    <>
      <ArticleList articles={data.contents} />
    </>
  );
}
