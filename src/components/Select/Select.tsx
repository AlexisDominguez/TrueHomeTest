import { FC, ChangeEvent } from "react";
import styles from "./Select.module.css";

interface ISelectProps {
  id: string;
  options: string[];
  label: string;
  error: boolean;
  errorMessage: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  containerClassName?: string;
}

const Select: FC<ISelectProps> = (props) => {
  const {
    id,
    options,
    label,
    onChange,
    error,
    errorMessage,
    containerClassName,
  } = props;

  return (
    <div className={containerClassName}>
      <label className={styles.selectLabel}>{label}</label>
      <input
        list={id}
        name={id}
        className={styles.select}
        onChange={onChange}
      />
      <datalist id={id}>
        {options.map((option) => (
          <option value={option} key={option} />
        ))}
      </datalist>
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default Select;
