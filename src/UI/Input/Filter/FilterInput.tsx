import React from "react";
import cl from "./FilterInput.module.css";

type Props = {
  onChange: (arg0: any) => void;
  value: string;
};

const FilterInput = ({value, onChange}: Props) => {
   //console.log("FindInput");
  const changeFilter = (event: any) => {
    onChange(event.target.value);
  };
  return (
    <input
      className={` ${cl.find_input} ${cl.search_input_icon}`}
      type="text"
      placeholder="поиск"
      value={value}
      onChange={changeFilter}
    />
  );
};

export default FilterInput;