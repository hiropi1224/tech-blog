import { ArticleList } from '@/app/_components/article-list';
import { Pagination } from '@/app/_components/pagination';
import { limit } from '@/app/_const';
import { getList } from '@/app/_libs/microcms';

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: limit,
    offset: limit * (current - 1),
  });

  return (
    <div className='flex flex-col gap-4'>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} />
    </div>
  );
}
