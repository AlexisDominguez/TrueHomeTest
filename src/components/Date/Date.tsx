import { FC, ChangeEvent } from "react";
import styles from "./Date.module.css";

interface IDateProps {
  label: string;
  error: boolean;
  errorMessage: string;
  containerClassName?: string;
  min?: Date;
  max?: Date;
  onChange: (event: ChangeEvent) => void;
}

// Improvements: Show Both Time Pickers at the same time to simulate a Date Range Picker
const Date: FC<IDateProps> = (props) => {
  const { label, error, errorMessage, containerClassName, min, max, onChange } =
    props;

  return (
    <div className={containerClassName}>
      <label className={styles.datePickerLabel}>{label}</label>

      <input
        className={styles.datePicker}
        type="date"
        min={min?.toISOString()}
        max={max?.toISOString()}
        onChange={onChange}
      />
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default Date;
