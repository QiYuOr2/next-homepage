import Layout from '../components/Layout/Layout';
import styles from '../css/index.module.css';

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <section>
          <h1>欢迎来到BAR团队的主页</h1>
          <div className={styles.desc}>
            <p>
              我们团队是在李东琦老师的带领下由一群热爱编程的安阳师范学院软件学院学生组成。
            </p>
            <p>我们的中心思想是：Breaking All Restriction.</p>
          </div>
        </section>
        <section>
          <h2>如何加入我们？</h2>
          <div className={styles.join}>
            <p>
              <span className={styles.num}>1.</span>
              <span>
                每年新生入学后的两到三个月左右，我们团队都会组织一次面向大一与大二学生的纳新活动。想要加入团队的同学届时请留意班级群内的通知。
              </span>
            </p>
            <p>
              <span className={styles.num}>2.</span>
              <span>
                为我们团队的项目做出过贡献，并且做出的贡献得到了该项目成员的认可，可在团队的主页项目仓库下提issue申请加入团队。
              </span>
            </p>
            <p>
              <span className={styles.num}>3.</span>
              <span>联系团队的指导老师</span>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
