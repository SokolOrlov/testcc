import React, { useState } from "react";
import cl from "./FindInput.module.css";

type FindInputProps = {
  onChange: (arg0: any) => void;
  style?: string;
};

const FindInput = ({ onChange}: FindInputProps) => {
   //console.log("FindInput");

  const [text, setText] = useState("");
  const changeFilter = (event: any) => {
    setText(event.target.value);
    onChange(event.target.value);
  };
  return (
    <input
      className={` ${cl.find_input} ${cl.search_input_icon}`}
      type="text"
      placeholder="поиск"
      value={text}
      onChange={changeFilter}
    />
  );
};

export default (FindInput);