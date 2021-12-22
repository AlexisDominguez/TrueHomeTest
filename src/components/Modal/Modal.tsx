import { FC, ReactNode, useRef } from "react";
import { useClickAway } from "react-use";
import Button from "../Button";
import styles from "./Modal.module.css";

interface IModalProps {
  children: ReactNode;
  handleClose: () => void;
  show: boolean;
}

const Modal: FC<IModalProps> = (props) => {
  const { children, handleClose, show } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  useClickAway(modalRef, () => {
    handleClose();
  });

  const showHideClassName = styles[show ? "display-block" : "display-none"];

  return (
    <div className={`${styles.modal} ${showHideClassName}`}>
      <section ref={modalRef} className={styles["modal-main"]}>
        <div className={styles.modalHeader}>
          <div>Mis Reservaciones</div>
          <div>
            <Button
              containerClass={styles.modalCloseButton}
              onClick={handleClose}
            >
              <i className="fas fa-times"></i>
            </Button>
          </div>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Modal;
