import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../Navbar';

import styles from './MainLayout.module.css';

export const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home | Next</title>
      </Head>
      <Navbar />
      <br />
      <br />
      <main className={styles.mainLayout}>{children}</main>
    </>
  );
};
