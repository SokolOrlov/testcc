import React from "react";
import styles from "./TextInput.module.css";

type Props = {
  onChange: (arg0: any) => void;
  value: string;
  label: string;
  validationMessage?: string
};

export const TextInput = ({ label, value, onChange, validationMessage="" }: Props) => {
  const changeValue = (event: any) => {
    onChange(event.target.value);
  };

  const displayError = validationMessage.length>0 && value.length==0 ? "visible": "hidden"

  return (
    <div className={styles.textInput}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="text" value={value} onChange={changeValue} />
      <span className={styles.validationMessage} style={{visibility: displayError }}>{validationMessage}</span>
    </div>
  );
};
 
