import React, { useEffect, useState } from "react";
import { TextInput } from "ui";

type MUData = {
  Ip: string;
  User: string;
  Password: string;
  SoftwareVersion: string;
  UseVpn: boolean;
  CreatedDate: string;
  ObjectId: number;
};

type Props = {
  data: MUData;
  dispatch: (action: { type: string; data: any }) => void;
};

const defaultValues = {
  Ip: "",
  User: "",
  Password: "",
  SoftwareVersion: "",
  UseVpn: false,
  CreatedDate: "",
  ObjectId: 0
};

export const MonitorUnitCard = ({ data = defaultValues, dispatch }: Props) => {
  const [ip, setIp] = useState(data.Ip == null? "": data.Ip);
  const [user, setUser] = useState(data.User == null? "": data.User);
  const [passw, setPassw] = useState(data.Password== null? "": data.Password);
  const [vpn, setVpn] = useState(data.UseVpn);

  const changeIp = (data: string) => {
    setIp(data);
  };

  const changeUser = (data: string) => {
    setUser(data);
  };

  const changePassw = (data: string) => {
    setPassw(data);
  };

  useEffect(() => {
    dispatch({ data: { ...data, Ip: ip, User: user, Password: passw, UseVpn: vpn, hasError: ip.trim().length == 0 }, type: "monitorunit" });
  }, [ip, user, passw, vpn]);

  return (
    <>
      <TextInput label="IP-АДРЕС" value={ip} onChange={changeIp} validationMessage="Укажите Ip-адрес" />
      <TextInput label="ПОЛЬЗОВАТЕЛЬ" value={user} onChange={changeUser} />
      <TextInput label="ПАРОЛЬ" value={passw} onChange={changePassw} />
      <TextInput disabled label="ВЕРСИЯ ПО" value={data.SoftwareVersion} />
      <TextInput disabled label="ДАТА СОЗДАНИЯ" value={data.CreatedDate} />
    </>
  );
};
