import styles from "./Main.module.scss";
import { Balance } from "./Balance/Balance";
import { RecentContacts } from "./RecentContacts/RecentContacts";
import { History } from "./History/History";
import { References } from "./References/References";

export const Main: React.FunctionComponent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <Balance />
        <References />
      </div>
      <RecentContacts />
      <History />
    </main>
  );
};
