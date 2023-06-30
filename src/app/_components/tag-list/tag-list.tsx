import { TagItem } from '@/app/_components/tag-item';
import { Tag } from '@/app/_libs/microcms';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

export const TagList: React.FC<Props> = ({ tags }) => {
  if (!tags) {
    return null;
  }

  return (
    <ul className='mx-2 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagItem tag={tag} />
        </li>
      ))}
    </ul>
  );
};
