import { FC, ReactNode } from "react";
import Header from "../Header";
import styles from "./MainLayout.module.css";

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.MainLayout}>{children}</main>
    </>
  );
};

export default MainLayout;
