import Link from 'next/link';

import { Tag } from '@/app/_libs/microcms';

type Props = {
  tag: Tag;
};

export const TagItem: React.FC<Props> = ({ tag }) => {
  return (
    <Link href={`/tags/${tag.id}`}>
      <div className='whitespace-nowrap rounded-sm bg-mauve-5 px-2 py-1'>{`#${tag.name}`}</div>
    </Link>
  );
};
