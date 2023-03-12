import React from "react";
import { Svg } from "ui";
import styles from "./FilterInput.module.css";

type Props = {
  onChange: (arg0: any) => void;
  value: string;
};

export const FilterInput = ({ value, onChange }: Props) => {
  //console.log("FindInput");
  const changeFilter = (event: any) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.filter}>
      <input className={styles.input} type="text" placeholder="поиск" value={value} onChange={changeFilter} />
      <Svg id="search"/>
    </div>
  );
}; 
