import { ArticleList } from '@/app/_components/article-list';
import { Pagination } from '@/app/_components/pagination';
import { limit } from '@/app/_const';
import { getList } from '@/app/_libs/microcms';

export const revalidate = 600;

export default async function Home() {
  const data = await getList({
    limit: limit,
  });

  return (
    <main className='flex flex-col gap-4'>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </main>
  );
}
