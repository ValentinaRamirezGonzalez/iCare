import styles from '../styles/skeleton.module.css'


const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeletonHeader}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
      </div>
    </div>
  );
};

export default Skeleton;
