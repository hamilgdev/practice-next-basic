import Link from 'next/link';

import { MainLayout } from '../../components/layout/MainLayout';

const ContactPage = () => {
  return (
    <MainLayout>
      ContactPage
      <br />
      <br />
      <Link href='/about'>Ir a About</Link>
    </MainLayout>
  );
};

export default ContactPage;
