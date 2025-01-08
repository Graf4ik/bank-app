import styles from "./RecentContacts.module.scss";
import { contacts } from "./constants";
import PlusIcon from "@/assets/icons/plus.svg";
import ContactIcon from "@/assets/icons/contact.svg";

export const RecentContacts: React.FunctionComponent = () => {
  return (
    <section className={styles.recentContacts}>
      <div className={styles.recentTitle}>
        <div>Recent Contacts</div>
        <div className={styles.allContacts}>All Contacts</div>
      </div>

      <div className={styles.contacts}>
        <div className={styles.addContact}>
          <img src={PlusIcon} />
          <div className={styles.addBtnName}>Add</div>
        </div>
        {contacts.map(({ id, name }) => {
          return (
            <div key={id} className={styles.contact}>
              <img src={ContactIcon} className={styles.contactAvatar} />
              <div className={styles.contactName}>{name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
