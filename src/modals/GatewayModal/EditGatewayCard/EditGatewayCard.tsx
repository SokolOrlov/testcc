import React, { useState } from "react";
import { Button, DropDown, TextInput } from "ui";
import { useEditGatewayCard } from "./useEditGatewayCard";
import styles from "../GatewayModal.module.css";

const _gatewayTypes = [
  { Id: 1, Name: "Модем", type: "modem" },
  { Id: 2, Name: "Блок мониторинга", type: "monitorunit" },
  { Id: 3, Name: "ECL4 Connect", type: "ecl4" },
  { Id: 4, Name: "SMD Connect", type: "smd" },
  { Id: 5, Name: "Digital heat", type: "smartheat" },
  { Id: 6, Name: "P-MC", type: "pmc" },
];

const makeCard = (type: string) => {
  switch (type?.toLowerCase()) {
    case "modem":
      return (
        <>
          <TextInput label="IMEI" value={""} onChange={null} />
          <TextInput label="НОМЕР ТЕЛЕФОНА СИМ-КАРТЫ" value={""} onChange={null} />
        </>
      );
    case "ecl4":
      return (
        <>
          <TextInput label="СЕРИЙНЫЙ НОМЕР" value={""} onChange={null} />
        </>
      );
    case "smd":
      return (
        <>
          <TextInput label="СЕРИЙНЫЙ НОМЕР" value={""} onChange={null} />
        </>
      );
    case "pmc":
      return (
        <>
          <TextInput label="СЕРИЙНЫЙ НОМЕР" value={""} onChange={null} />
        </>
      );
    case "monitorunit":
      return (
        <>
          <TextInput label="IP-АДРЕС" value={""} onChange={null} />
          <TextInput label="ПОЛЬЗОВАТЕЛЬ" value={""} onChange={null} />
          <TextInput label="ПАРОЛЬ" value={""} onChange={null} />
        </>
      );
    case "smartheat":
      return (
        <>
          <Button label="ВЫБРАТЬ МОНТАЖНУЮ КАРТУ" icon="download" onClick={null} />
        </>
      );

    default:
      return null;
  }
};

const EditGatewayCard = () => {
  const {clientState, serverState} = useEditGatewayCard();
  const [gType, setgType] = useState<string>(null);

  const selectGatewayType = (id: number) => {
    // console.log("selectGatewayType");
    const t = _gatewayTypes.filter((t) => t.Id == id)[0];
    setgType(t.type);
  };

  const saveGateway = () => {
    console.log("saveGateway");
  };

  return (
    <div {...{ disabled: serverState.loading }} className={styles.body}>
      <DropDown label="ТИП КОММУНИКАЦИОННОГО УСТРОЙСТВА" data={_gatewayTypes} onSelect={selectGatewayType} firstElement="Text" emptyText={"Не выбрано"} />
      {makeCard(gType)}

      <div className={styles.footer}>
        <Button label="ОТМЕНА" type="danger" onClick={clientState.close} />
        <Button label="СОХРАНИТЬ" type="success" icon="round_ok" onClick={saveGateway} />
      </div>
    </div>
  );
};

export default EditGatewayCard;
