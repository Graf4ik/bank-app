import styles from "./Notification.module.scss";
import MessageIcon from "@/assets/icons/message.svg";

export const Notification: React.FunctionComponent = () => {
  return (
    <div className={styles.notifications}>
    <img src={MessageIcon} className={styles.notifyImg} />
    <div className={styles.notifyMessage}>
      You have USD 1,000 pending money. It will be ready in 2 business days.
      <div className={styles.notifyAction}>Get Your money now &#8594;</div>
    </div>
  </div>
  );
};
