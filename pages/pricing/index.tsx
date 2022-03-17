import Link from 'next/link';

import { MainLayout } from '../../components/layout/MainLayout';

const PrincingPage = () => {
  return (
    <MainLayout>
      PrincingPage
      <br />
      <br />
      <Link href='/contact'>Ir a Contact</Link>
    </MainLayout>
  );
};

export default PrincingPage;
