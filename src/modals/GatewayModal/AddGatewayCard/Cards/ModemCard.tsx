import React, { useEffect, useState } from "react";
import { TextInput } from "ui";

type Props = {
  dispatch: (action: { type: string; data: any }) => void;
};

export const ModemCard = ({ dispatch }: Props) => {
  const [imei, setImei] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const changeImei = (data: string) => { 
    setImei(data);
  };

  const changePhone = (data: string) => { 
    setPhone(data);
  };

  useEffect(() => {
    dispatch({ data: { IMEINumber: imei, PhoneNumber: phone }, type: "modem" });
  }, [imei, phone]);

  return (
    <>
      <TextInput label="IMEI" value={imei} onChange={changeImei} />
      <TextInput label="НОМЕР ТЕЛЕФОНА СИМ-КАРТЫ" value={phone} onChange={changePhone} />
    </>
  );
};
