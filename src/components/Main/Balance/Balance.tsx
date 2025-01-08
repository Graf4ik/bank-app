import styles from "./Balance.module.scss";

export const Balance: React.FunctionComponent = () => {
  return (
    <section className={styles.balance}>
      <div className={styles.title}>Total Balance</div>
      <div className={styles.price}>
        29, 475.00 <span className={styles.currency}>USD</span>
      </div>
      <div className={styles.actions}>
        <div className={styles.primary}>
          Send <span className={styles.actionsIcon}>&uarr;</span>
        </div>
        <div className={styles.secondary}>
          Request <span className={styles.actionsIcon}>&darr;</span>
        </div>
        <div className={styles.secondary}>
          Top Up <span className={styles.actionsIcon}>+</span>
        </div>
      </div>
    </section>
  );
};
