import { ActiveLink } from './ActiveLink';

import styles from './Navbar.module.css';

const menu = [
  {
    id: 0,
    text: 'Home',
    path: '/'
  },
  {
    id: 1,
    text: 'About',
    path: '/about'
  },
  {
    id: 2,
    text: 'Contact',
    path: '/contact'
  },
  {
    id: 3,
    text: 'Princing',
    path: '/pricing'
  }
];

export const Navbar = () => {
  return (
    <nav className={styles.mainMenu}>
      {menu.map(({ id, text, path }) => (
        <ActiveLink key={id} text={text} path={path} />
      ))}
    </nav>
  );
};
