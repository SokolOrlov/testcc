import React, { useEffect, useState } from "react";
import { TextInput } from "ui";

type ModemData = {
  CreatedDate: string;
  IMEINumber: string;
  PhoneNumber: string;
  SoftwareVersion: string;
  ObjectId: number;
};

type Props = {
  data: ModemData;
  dispatch: (action: { type: string; data: any }) => void;
};

const defaultValues = {
  CreatedDate: "",
  IMEINumber: "",
  PhoneNumber: "",
  SoftwareVersion: "",
  ObjectId: 0
};

export const ModemCard = ({ data = defaultValues, dispatch }: Props) => {
  const [phoneNumber, sePhoneNumber] = useState<string>(data.PhoneNumber == null? "": data.PhoneNumber);

  const changePhone = (data: string) => {
    sePhoneNumber(data);
  };

  useEffect(() => {
    dispatch({ data: { ...data, PhoneNumber: phoneNumber, hasError: phoneNumber.trim().length == 0 }, type: "modem" });
  }, [phoneNumber]);

  return (
    <>
      <TextInput disabled label="IMEI" value={data.IMEINumber} />
      <TextInput label="НОМЕР ТЕЛЕФОНА СИМ-КАРТЫ" value={phoneNumber} onChange={changePhone} validationMessage={"Укажите номер телефона"} />
      <TextInput disabled label="ВЕРСИЯ ПО" value={data.SoftwareVersion} />
      <TextInput disabled label="ДАТА СОЗДАНИЯ" value={data.CreatedDate} />
    </>
  );
};
