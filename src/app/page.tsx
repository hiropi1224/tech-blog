import { getList } from '@/app/_libs/microcms';

export default async function Home() {
  const data = await getList();

  return (
    <main className='flex min-h-screen flex-col items-center'>
      Hello, world!
      <div className='flex flex-col'>
        {data.contents.map((content) => (
          <div key={content.id} className='border-b border-mauve-2'>
            <div>{content.title}</div>
            <div>{content.createdAt}</div>
            <div>
              {content.tags?.map((tag) => (
                <p key={tag.id}>{tag.name}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
