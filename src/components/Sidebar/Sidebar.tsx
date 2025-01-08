import styles from "./Sidebar.module.scss";
import { Notification } from "./Notification/Notification";
import { CardActions } from "./CardActions/CardActions";
import { Card } from "./Card/Card";

export const SideBar: React.FunctionComponent = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.cardsInfo}>
        <div className={styles.title}>
          <div>Cards</div>
          <div className={styles.showAll}>Show all</div>
        </div>
        <Card />
        <CardActions />
      </div>
      <Notification />
    </aside>
  );
};
