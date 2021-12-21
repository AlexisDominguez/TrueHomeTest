import { FC, MouseEvent, ReactNode } from "react";
import styles from "./Button.module.css";

interface IButtonProps {
  onClick: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  children: ReactNode;
  containerClass?: string;
}

const Button: FC<IButtonProps> = (props) => {
  const { onClick, disabled, children, containerClass } = props;

  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${containerClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
