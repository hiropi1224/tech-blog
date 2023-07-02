import Link from 'next/link';
import { tv } from 'tailwind-variants';

import { Tag } from '@/app/_libs/microcms';

const tagStyle = tv({
  base: 'whitespace-nowrap rounded-sm bg-mauve-10 px-2 py-1 text-sm text-amber-1 hover:bg-mauve-8',
});

type Props = {
  tag: Tag;
};

export const TagItem: React.FC<Props> = ({ tag }) => {
  return (
    <Link href={`/tags/${tag.id}`}>
      <div className={tagStyle()}>{`# ${tag.name}`}</div>
    </Link>
  );
};
