import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { Tag } from '@/app/_libs/microcms';

const tagStyle = tv({
  base: 'whitespace-nowrap rounded-sm bg-mauvedark-5 px-2 py-1 text-amber-1',
});

type Props = {
  tag: Tag;
};

export const TagItem: React.FC<Props> = ({ tag }) => {
  return (
    <Link href={`/tags/${tag.id}`}>
      <div className={tagStyle()}>{`#${tag.name}`}</div>
    </Link>
  );
};
