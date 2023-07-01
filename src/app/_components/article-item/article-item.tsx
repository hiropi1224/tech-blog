import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { TagList } from '@/app/_components/tag-list';
import { Article } from '@/app/_libs/microcms';
import { formatDate } from '@/app/_utils/format-date';

const articleStyle = tv({
  slots: {
    base: 'flex flex-col gap-2',
    title: 'text-lg font-bold',
    readmore: 'border-b border-mauve-10 text-mauve-10',
    createdAt: 'text-sm text-mauve-10',
  },
});

const { base, title, readmore, createdAt } = articleStyle();

type Props = {
  article: Article;
};

export const ArticleItem: React.FC<Props> = ({ article }) => {
  return (
    <div className={base()}>
      <Link href={`/articles/${article.id}`}>
        <div className={title()}>{article.title}</div>
      </Link>
      <div className='flex gap-2'>
        <div>
          {article.description != null ? article.description : article.title}
        </div>
        <Link href={`/articles/${article.id}`} className={readmore()}>
          Read More →
        </Link>
      </div>
      <div className={createdAt()}>{formatDate(article.createdAt)}</div>
      {article.tags != null && <TagList tags={article.tags} />}
    </div>
  );
};
