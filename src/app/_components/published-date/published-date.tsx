import { formatDate } from '@/app/_utils/format-date';

type Props = {
  date: string;
};

export const PublishedDate: React.FC<Props> = ({ date }) => {
  return <span>公開日時: {formatDate(date)}</span>;
};
