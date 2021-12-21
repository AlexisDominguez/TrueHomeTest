import { ChangeEvent, FC } from "react";
import styles from "./InputNumber.module.css";

interface IInputNumberProps {
  min: number;
  max: number;
  step: number;
  value?: number | string;
  label: string;
  error: boolean;
  errorMessage: string;
  containerClassName?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputNumber: FC<IInputNumberProps> = (props) => {
  const {
    min,
    max,
    step,
    value,
    onChange,
    error,
    containerClassName,
    errorMessage,
    label,
  } = props;

  return (
    <div className={containerClassName}>
      <label className={styles.inputNumberLabel}>{label}</label>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className={styles.inputNumber}
      />
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default InputNumber;
