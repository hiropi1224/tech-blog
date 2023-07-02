import { tv } from 'tailwind-variants';

import { PublishedDate } from '@/app/_components/published-date';
import { TagList } from '@/app/_components/tag-list';
import { Article as ArticleType } from '@/app/_libs/microcms';

const articleStyle = tv({
  slots: {
    base: 'mt-4 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-sm bg-amber-1 px-4 md:mt-0',
    title: 'text-3xl font-bold',
    published: 'flex flex-row-reverse',
    article:
      'prose prose-slate w-full prose-headings:my-4 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg',
  },
});

const { base, title, published, article } = articleStyle();

type Props = {
  data: ArticleType;
};

export const Article: React.FC<Props> = ({ data }) => {
  return (
    <main className={base()}>
      <h1 className={title()}>{data.title}</h1>
      <p>{data.description}</p>
      <TagList tags={data.tags} />
      <div className={published()}>
        <PublishedDate date={data.publishedAt || data.createdAt} />
      </div>
      <article
        className={article()}
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      ></article>
    </main>
  );
};
