import styles from "./References.module.scss";
import CopyIcon from "@/assets/icons/copy.svg";

export const References: React.FunctionComponent = () => {
  return (
    <section className={styles.reference}>
      <div className={styles.refernce__title}>
        Invite a friend with code below and redeem special bonus USD 15 form us!
      </div>
      <div className={styles.reference__code}>
        <p>JELLYPOENYA-SEP2023</p>
        <img src={CopyIcon} />
      </div>
    </section>
  );
};
