import { CSSProperties, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const style: CSSProperties = {
  color: 'blue',
  textDecoration: 'underline'
};

interface Props {
  path: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ path, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={path}>
      <a style={asPath === path ? style : undefined}>{text}</a>
    </Link>
  );
};
