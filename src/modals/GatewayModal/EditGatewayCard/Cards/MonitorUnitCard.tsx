import React, { useEffect, useState } from "react";
import { TextInput } from "ui";

type Props = {
  dispatch: (action: { type: string; data: any }) => void;
};

export const MonitorUnitCard = ({ dispatch }: Props) => {
  const [ip, setIp] = useState("");
  const [user, setUser] = useState("");
  const [passw, setPassw] = useState("");
  const [vpn, setVpn] = useState(false);

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
    dispatch({ data: { Ip: ip, User: user, Password: passw, UseVpn: vpn, hasError: ip.trim().length == 0 }, type: "monitorunit" });
  }, [ip, user, passw, vpn]);

  return (
    <>
      <TextInput label="IP-АДРЕС" value={ip} onChange={changeIp} validationMessage="Укажите Ip-адрес" />
      <TextInput label="ПОЛЬЗОВАТЕЛЬ" value={user} onChange={changeUser} />
      <TextInput label="ПАРОЛЬ" value={passw} onChange={changePassw} />
    </>
  );
};
