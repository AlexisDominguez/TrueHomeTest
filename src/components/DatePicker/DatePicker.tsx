import { FC, ChangeEvent } from "react";
import styles from "./DatePicker.module.css";
import { STANDARD_INPUT_DATE_FORMAT } from "../../constants";
import moment from "moment";

interface IDateProps {
  label: string;
  error: boolean;
  errorMessage: string;
  containerClassName?: string;
  min?: Date;
  max?: Date;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
        min={min && moment.utc(min).format(STANDARD_INPUT_DATE_FORMAT)}
        max={max && moment.utc(max).format(STANDARD_INPUT_DATE_FORMAT)}
        onChange={onChange}
      />
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default Date;
