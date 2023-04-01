import React, { useState } from "react";
import { TextInput } from "ui";

type Props = {
  dispatch: (action: { type: string; data: any }) => void;
};

export const SmdCard = ({ dispatch }: Props) => {
  const [serial, setData] = useState("");

  const changeData = (data: string) => {
    setData(data);
    dispatch({ data: { SerialNumber: data, hasError: data.trim().length == 0 }, type: "smd" });
  };


  return (
    <>
      <TextInput label="СЕРИЙНЫЙ НОМЕР" value={serial} onChange={changeData} validationMessage="Укажите серийный номер" />
    </>
  );
};
