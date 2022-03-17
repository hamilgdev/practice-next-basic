import Link from 'next/link';

import { MainLayout } from '../components/layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      HomePage
      <br />
      <br />
      <Link href='/about'> Ir a About </Link>
    </MainLayout>
  );
};

export default HomePage;
