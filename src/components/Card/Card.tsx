import { FC, ReactNode } from "react";
import styles from "./Card.module.css";

interface ICardProps {
  children: ReactNode;
  softCard?: boolean;
  containerClass?: string;
}

const Card: FC<ICardProps> = ({ children, softCard, containerClass }) => {
  return (
    <div
      className={`${
        softCard ? styles.softCard : styles.card
      } ${containerClass}`}
    >
      {children}
    </div>
  );
};

export default Card;
