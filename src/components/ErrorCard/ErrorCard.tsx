import React from "react";
import Card from "../Card";
import styles from "./ErrorCard.module.css";

const ErrorCard = () => {
  return (
    <Card containerClass={styles.errorCardContainer} softCard>
      <div className={styles.errorCardTitle}>
        ¡No se encontraron vuelos disponbiles!
      </div>
      <div className={styles.errorCardSubTitle}>
        No se encontraron vuelos disponibles para este día.
      </div>
    </Card>
  );
};

export default ErrorCard;
