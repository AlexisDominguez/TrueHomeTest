import { FC } from "react";
import Card from "../Card";
import styles from "./SuccessCard.module.css";

interface ISuccessCardProps {
  fullName: string;
  address: string;
  email: string;
}

const SuccessCard: FC<ISuccessCardProps> = (props) => {
  const { fullName, address, email } = props;

  return (
    <Card containerClass={styles.successCardContainer} softCard>
      <div className={styles.successCardTitle}>
        ¡Muchas gracias por tu reservación!
      </div>
      <div className={styles.successCardSubTitle}>Datos de la reservación:</div>
      <div className={styles.successCardRow}>
        <div className={styles.successCardRowTitle}>Nombre: </div>
        <div>{fullName}</div>
      </div>
      <div className={styles.successCardRow}>
        <div className={styles.successCardRowTitle}>Correo electronico: </div>
        <div>{email}</div>
      </div>
      <div className={styles.successCardRow}>
        <div className={styles.successCardRowTitle}>Direccion: </div>
        <div>{address}</div>
      </div>
    </Card>
  );
};

export default SuccessCard;
