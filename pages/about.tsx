import Layout from '../components/Layout/Layout';
import styles from '../css/about.module.css';

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>关于BAR团队</h1>
        <div className={styles.content}>
          <section>
            <h2>团队介绍</h2>
            <div className={styles.desc}>
              <span>
                BAR团队于2016年成立，是由软件学院前端方向（原.net方向）负责人李东琦老师所创建的。团队的主要任务是帮助同学们更好的学习，能够提供给同学们更多的学习资源，让同学们学到在平时课堂上学不到的东西，也可以提高学生的动手操作能力，获得更多的实战经验，能够为以后的学习，工作打下良好的基础。
              </span>
            </div>
          </section>
          <section>
            <section className={styles.skills}>
              <h2>主要技术栈</h2>
              <div>
                <p className={styles.mb5}>
                  <span className={styles.label}>前端</span>
                  <span>Vue.js、React.js、微信小程序</span>
                </p>
                <p className={styles.mb5}>
                  <span className={styles.label}>后端</span>
                  <span>Nodejs、.Net</span>
                </p>
              </div>
            </section>
          </section>
        </div>
        <span>
          <img className={styles.logo} src="../static/logo.jpg" alt="" />
        </span>
      </div>
    </Layout>
  );
}
