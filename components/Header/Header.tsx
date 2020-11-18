import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

type Props = {
  title?: string;
};

const routes = [
  { href: '/', label: '主页' },
  { href: '/project', label: '项目' },
  { href: '/about', label: '关于我们' },
  { href: 'https://github.com/B-A-R-team', label: '团队Github' },
];

export default function Header({ title = 'BAR团队' }: Props) {
  const [activeRoute, setActiveRoute] = useState('/');
  const router = useRouter();

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={styles.container}>
        <div>{title}</div>
        <nav>
          {routes.map((item, index) => (
            <Link href={item.href} key={index}>
              <a className={activeRoute === item.href ? styles.active : ''}>
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
