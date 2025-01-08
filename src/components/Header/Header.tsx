import styles from "./Header.module.scss";
import LogoIcon from "@/assets/icons/logo.svg";
import Contact from "@/assets/icons/contact.svg";

export const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <img src={LogoIcon} className={styles.logo} alt="logoIcon" />
      <div className={styles.message}>
        <div className={styles.messageText}>
          Welcome back, <span className={styles.userName}>Jelly!</span>
        </div> 
        <div className={styles.contactIcon}>
          <img src={Contact} alt="contactIcon" />
        </div>
      </div>
    </header>
  );
};
