import React, { FC } from "react";
import Card from "../Card";
import styles from "./ErrorCard.module.css";

interface IErrorCardProps {
  title: string;
  subTitle: string;
}

const ErrorCard: FC<IErrorCardProps> = ({ title, subTitle }) => {
  return (
    <Card containerClass={styles.errorCardContainer} softCard>
      <div className={styles.errorCardTitle}>{title}</div>
      <div className={styles.errorCardSubTitle}>{subTitle}</div>
    </Card>
  );
};

export default ErrorCard;
