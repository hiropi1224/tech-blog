import { tv } from 'tailwind-variants';

import { TagItem } from '@/app/_components/tag-item';
import { Tag } from '@/app/_libs/microcms';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

const tagListStyle = tv({
  base: 'mx-2 flex flex-wrap gap-2',
});

export const TagList: React.FC<Props> = ({ tags }) => {
  if (!tags) {
    return null;
  }

  return (
    <ul className={tagListStyle()}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagItem tag={tag} />
        </li>
      ))}
    </ul>
  );
};
