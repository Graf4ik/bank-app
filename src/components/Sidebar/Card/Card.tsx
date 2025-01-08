import styles from "./Card.module.scss";
import Logo from '@/assets/icons/mastercard.svg';

export const Card: React.FunctionComponent = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__block1}>
        <div className={styles.owner}>Jelly Grande</div>
        <div className={styles.logo}>
          <img src={Logo} />
        </div>
      </div>

      <div className={styles.card__block2}>
        <div className={styles.number}>
            0123 4567 8910
        </div>
        <div className={styles.cvv}>
          CVV
        </div>
      </div>
    </div>
  );
};
