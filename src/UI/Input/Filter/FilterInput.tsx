import React from "react";
import styles from "./FilterInput.module.css";
import Svg from "../../Svg";
type Props = {
  onChange: (arg0: any) => void;
  value: string;
};

const FilterInput = ({ value, onChange }: Props) => {
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

export default FilterInput;
