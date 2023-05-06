import React, { useState } from "react";
import { TextInput } from "ui";

type Props = {
  dispatch: (action: { type: string; data: any }) => void;
};

export const PmcCard = ({ dispatch }: Props) => {
  const [serial, setSerial] = useState("");
  
  const changeSerial = (data: string) => { 
    setSerial(data);
    dispatch({ data: { SerialNumber: data, hasError: data.trim().length == 0  }, type: "pmc" });
  };

  return (
    <>
      <TextInput label="СЕРИЙНЫЙ НОМЕР" value={serial} onChange={changeSerial} validationMessage="Укажите серийный номер" />
    </>
  );
};
