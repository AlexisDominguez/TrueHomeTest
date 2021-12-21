import { ChangeEvent, FC } from "react";
import styles from "./TextInput.module.css";

interface ITextInputProps {
  value?: number | string;
  label: string;
  error: boolean;
  errorMessage: string;
  containerClassName?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
}

const TextInput: FC<ITextInputProps> = (props) => {
  const {
    value,
    onChange,
    error,
    containerClassName,
    errorMessage,
    label,
    name,
    required,
  } = props;
  return (
    <div className={containerClassName}>
      <label className={styles.textInputLabel}>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className={styles.textInput}
      />
      {error && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};

export default TextInput;
