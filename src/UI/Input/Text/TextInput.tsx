import React from "react";
import styles from "./TextInput.module.css";

type Props = {
  onChange?: (arg0: any) => void;
  value: string;
  label: string;
  validationMessage?: string;
  disabled?: boolean;
};

export const TextInput = ({ disabled, label, value, onChange, validationMessage = "" }: Props) => {
  const changeValue = (event: any) => {
    onChange(event.target.value);
  };

  const displayError = validationMessage.length > 0 && (value == null || value.length == 0) ? "visible" : "hidden";

  return (
    <div className={styles.textInput}>
      <label className={styles.label}>{label}</label>
      <input {...{ disabled: disabled }} className={styles.input} type="text" value={value == null ? "" : value} onChange={changeValue} />
      <span className={styles.validationMessage} style={{ visibility: displayError }}>
        {validationMessage}
      </span>
    </div>
  );
};
