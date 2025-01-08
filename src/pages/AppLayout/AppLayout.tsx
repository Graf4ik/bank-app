import { Header } from "../../components/Header/Header";
import { SideBar } from "../../components/Sidebar/Sidebar";
import styles from "./AppLayout.module.scss";
import { Main } from "../../components/Main/Main";
import { Navbar } from "../../components/Navbar/Navbar";

export const AppLayout: React.FunctionComponent = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Navbar />
      <SideBar />
      <Main />
    </div>
  );
};
