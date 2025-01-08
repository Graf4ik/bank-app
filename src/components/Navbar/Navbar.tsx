import { links } from "./constants";
import styles from "./Navbar.module.scss";

export const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <nav className={styles.nav}>
          {links.map(({ id, title }) => {
            return (
              <ul key={id}>
                <li>{title}</li>
              </ul>
            );
          })}
      </nav>
    </>
  );
};
