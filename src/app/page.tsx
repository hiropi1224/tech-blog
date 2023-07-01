import { ArticleItem } from '@/app/_components/article-item/article-item';
import { getList } from '@/app/_libs/microcms';

export default async function Home() {
  const data = await getList();

  return (
    <main>
      <div className='flex flex-col gap-8'>
        {data.contents.map((content) => (
          <ArticleItem key={content.id} article={content} />
        ))}
      </div>
    </main>
  );
}
