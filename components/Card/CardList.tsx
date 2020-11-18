import { Project } from '../../interfaces';
import Card from './Card';
import styles from './Card.module.css';

type Props = {
  list: Project[];
};

export default function CardList({ list }: Props) {
  return (
    <div className={styles.listContainer}>
      {list &&
        list.map((item, index) => (
          <div key={index}>
            <Card title={item.title} footer={item.site}>
              <img src={item.img} alt={item.title} />
              <p>{item.desc}</p>
            </Card>
          </div>
        ))}
    </div>
  );
}
