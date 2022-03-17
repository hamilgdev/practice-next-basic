import Link from 'next/link';
import { DarkLayout } from '../components/layout/DarkLayout';
import { MainLayout } from '../components/layout/MainLayout';

const AboutPage = () => {
  return (
    <>
      AboutPage
      <br />
      <br />
      <Link href='/'>Ir a Home</Link>
    </>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
