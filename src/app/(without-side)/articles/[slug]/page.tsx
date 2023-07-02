import { Metadata } from 'next';

import { Article } from '@/app/_components/article';
import { getDetail } from '@/app/_libs/microcms';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

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

  return <Article data={data} />;
}
