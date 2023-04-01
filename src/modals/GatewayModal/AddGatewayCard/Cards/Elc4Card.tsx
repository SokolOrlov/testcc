import React, { useState } from "react";
import { TextInput } from "ui";

type Props = {
  dispatch: (action: { type: string; data: any }) => void;
};

export const Ecl4Card = ({ dispatch }: Props) => {
  const [serial, setSerial] = useState("");
  
  const changeSerial = (data: string) => { 
    setSerial(data);
    dispatch({ data: { SerialNumber: data }, type: "ecl4" });
  };

  return (
    <>
      <TextInput label="СЕРИЙНЫЙ НОМЕР" value={serial} onChange={changeSerial} />
    </>
  );
};
