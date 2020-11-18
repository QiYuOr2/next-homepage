import CardList from '../components/Card/CardList';
import Layout from '../components/Layout/Layout';
import { Project } from '../interfaces';
import styles from '../css/project.module.css';
import { GetStaticProps } from 'next';
import { projectListData } from '../utils/project-data';

type Props = {
  projectList: Project[];
};

export default function ProjectPage({ projectList }: Props) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>团队项目</h1>
        <CardList list={projectList} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projectList: Project[] = projectListData;
  // return的变量名必须和组件接收的参数名相同
  return { props: { projectList } };
};
