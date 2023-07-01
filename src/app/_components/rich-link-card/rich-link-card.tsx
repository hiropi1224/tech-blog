import Image from 'next/image';
import Link from 'next/link';

type Props = {
  url: string;
  title: string;
  image: string;
  site: string;
};

export const RichLinkCard: React.FC<Props> = ({ url, title, image, site }) => {
  return (
    <Link href={url} target='_blank' rel='noreferrer' className='flex gap-2'>
      <div>
        <Image src={image} width={200} height={200} alt={title} />
      </div>
      <div className='flex flex-col justify-between'>
        <p className='text-lg font-bold'>{title}</p>
        <p className='text-mauve-9'>{site}</p>
      </div>
    </Link>
  );
};
