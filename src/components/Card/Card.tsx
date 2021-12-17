import { FC, ReactNode } from "react";
import styles from "./Card.module.css";

interface ICardProps {
  children: ReactNode;
}

const Card: FC<ICardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
