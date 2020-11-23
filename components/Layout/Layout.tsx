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
        <p>
          <a href="https://beian.miit.gov.cn/">
            ICP 备案号： 豫ICP备18029085号-1
          </a>
        </p>
        <p className={styles.contact}>
          <span>通信地址：河南省安阳市文峰区文明大道265号图书馆402房</span>
          <span>邮箱：1176281967@qq.com</span>
        </p>
        <p>Copyright © 2016-2020 BAR Team. All rights reserved.</p>
        <p>
          Power by
          <a className={styles.powerlink} href="https://www.nextjs.cn/">
            Next.js
          </a>
        </p>
      </footer>
    </div>
  );
}
