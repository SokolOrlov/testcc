import React, { useState } from "react";
import { Button, DropDown } from "ui";
import { useAddGatewayCard } from "./useAddGatewayCard";
import styles from "../GatewayModal.module.css";
import { DigitalHeatCard, Ecl4Card, ModemCard, MonitorUnitCard, PmcCard, SmdCard } from "./Cards"; 
const _gatewayTypes = [
  { Id: 1, Name: "Модем", type: "modem" },
  { Id: 2, Name: "Блок мониторинга", type: "monitorunit" },
  { Id: 3, Name: "ECL4 Connect", type: "ecl4" },
  { Id: 4, Name: "SMD Connect", type: "smd" },
  { Id: 5, Name: "Digital heat", type: "smartheat" },
  { Id: 6, Name: "P-MC", type: "pmc" },
];

const makeCard = (type: string, dispatch: (action: {type: string, data: any})=>void) => {
  switch (type?.toLowerCase()) {
    case "modem": return <ModemCard dispatch={dispatch}/>;
    case "ecl4": return <Ecl4Card dispatch={dispatch}/>;
    case "smd": return <SmdCard dispatch={dispatch}/>;
    case "pmc": return <PmcCard dispatch={dispatch}/>;
    case "monitorunit": return <MonitorUnitCard dispatch={dispatch}/>
    case "smartheat": return <DigitalHeatCard dispatch={dispatch}/>;

    default:
      return null;
  }
};

const AddGatewayCard = () => {
  const {clientState, serverState} = useAddGatewayCard();
  const [gType, setgType] = useState<string>(null);

  const selectGatewayType = (id: number) => {
    const t = _gatewayTypes.filter((t) => t.Id == id)[0];
    setgType(t.type);
  };

  const saveGateway = () => {
    serverState.saveGateway(clientState.state);
  };
// console.log(clientState);

  return (
    <div {...{ disabled: serverState.loading }} className={styles.body}>
      <DropDown 
      label="ТИП КОММУНИКАЦИОННОГО УСТРОЙСТВА" 
      data={_gatewayTypes} 
      onSelect={selectGatewayType} 
      firstElement="Text" 
      emptyText={"Не выбрано"} 
      validationMessage="Укажите тип коммуникационного устройства"/>
      {makeCard(gType, clientState.dispatch)}

      <div className={styles.footer}>
        <Button label="ОТМЕНА" type="danger" onClick={clientState.close} />
        <Button label="СОХРАНИТЬ" type="success" icon="round_ok" disabled={clientState.hasError} onClick={saveGateway} />
      </div>
    </div>
  );
};

export default AddGatewayCard;
