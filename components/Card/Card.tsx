import { ReactNode } from 'react';
import styles from './Card.module.css';

type Props = {
  title?: string | ReactNode;
  children: string | ReactNode;
  footer?: string | ReactNode;
  width?: string | number;
  height?: string | number;
};

export default function Card({ children, ...rest }: Props) {
  return (
    <div
      className={styles.container}
      style={{ width: rest.width, height: rest.height }}
    >
      {rest.title && <div className={styles.title}>{rest.title}</div>}
      <div className={styles.content}>{children}</div>
      {rest.footer && <div className={styles.footer}>{rest.footer}</div>}
    </div>
  );
}
