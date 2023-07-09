import { Metadata } from 'next';

import { Article } from '@/app/_components/article';
import { Breadcrumb } from '@/app/_components/breadcrumb';
import { getDetail } from '@/app/_libs/microcms';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug);

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.eyecatch?.url || ''],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getDetail(params.slug);

  return (
    <div className='flex flex-col gap-4'>
      <Breadcrumb title={data.title} />
      <Article data={data} />
    </div>
  );
}
