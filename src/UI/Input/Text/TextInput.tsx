import React from "react";
import styles from "./TextInput.module.css";

type Props = {
  onChange: (arg0: any) => void;
  value: string;
  label: string;
};

const TextInput = ({ label, value, onChange }: Props) => {
  const changeValue = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.textInput}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="text" value={value} onChange={changeValue} />
    </div>
  );
};

export default TextInput;
