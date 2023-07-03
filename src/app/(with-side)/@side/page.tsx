import { TagList } from '@/app/_components/tag-list';
import { getCategoryList, getTagList } from '@/app/_libs/microcms';

export default async function Side() {
  const tags = await getTagList({
    limit: 30,
  });

  const categoryList = await getCategoryList();

  return (
    <div className='flex flex-col gap-4 lg:max-w-xs'>
      <div className='bg-amber-1 p-4'>
        <p className='font-bold'>カテゴリー一覧</p>
        <TagList tags={categoryList.contents} />
      </div>
      <div className='bg-amber-1 p-4'>
        <p className='font-bold'>タグ一覧</p>
        <TagList tags={tags.contents} />
      </div>
    </div>
  );
}
