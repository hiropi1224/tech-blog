import { ArticleList } from '@/app/_components/article-list';
import { getList } from '@/app/_libs/microcms';

export default async function Home() {
  const data = await getList();

  return (
    <main className='flex flex-col gap-4'>
      <ArticleList articles={data.contents} />
    </main>
  );
}
