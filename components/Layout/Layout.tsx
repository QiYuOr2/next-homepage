import React, { ReactNode } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span>Copyright © 2016-2020 BAR Team. All rights reserved.</span>
        <span>
          Power by
          <a className={styles.powerlink} href="https://www.nextjs.cn/">
            Next.js
          </a>
        </span>
      </footer>
    </div>
  );
}
