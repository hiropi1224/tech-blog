import { Breadcrumb } from '@/app/_components/breadcrumb';
import { TagItem } from '@/app/_components/tag-item';
import { getTag } from '@/app/_libs/microcms';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function Layout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);

  return (
    <div className='flex flex-col gap-2'>
      <Breadcrumb title={tag.name} />
      <div className='flex gap-2'>
        <TagItem tag={tag} />
        <p className='text-lg font-bold'>の記事一覧</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
