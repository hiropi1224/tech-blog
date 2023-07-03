import { ArticleItem } from '@/app/_components/article-item';
import { Article } from '@/app/_libs/microcms';

type Props = {
  articles: Article[];
};

export const ArticleList: React.FC<Props> = ({ articles }) => {
  if (articles == null) return null;

  if (articles.length === 0) return <p>投稿された記事がありません。</p>;

  return (
    <ul className='flex flex-col gap-4'>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
};
