import React, { useState } from "react";
import { ControlButton, Svg } from "ui";
import { Gateway } from "../types";
import { DeviceContainer } from "../../Device/DeviceContainer";

import styles from "../../Equipment.module.css";

type Props = {
  data: Gateway;
  onDelete: (arg: number) => void;
  onEdit: (arg: number, type: string) => void;
};

export const SmartHeat: React.FC<Props> = ({ data, onDelete, onEdit }) => {
  const [isExpanded, setExpand] = useState(false);
  return (
    <div className={styles.equipment}>
      <div className={styles.gateway_card} onClick={() => setExpand(!isExpanded)}>
        <Svg id="digital_heat" className={`${styles.gateway_card_icon} ${gatewayStatus(data.IsOnline, data.AlarmedDeviceCount > 0)}`} />
        <div className={styles.gateway_card_data}>
          <p className={styles.gateway_card_name}>DIGITAL HEAT</p>
          <div className={styles.gateway_card_info}>
            <p>{`Дата последней корректировки: ${data.CorrectionDateString}`}</p>
          </div>
        </div>
        <Svg id="caret_small" className={`${styles.gateway_card_expand_icon} ${isExpanded ? styles.gateway_card_expanded : styles.gateway_card_collapsed}`} />
        <div className={styles.controls} style={{ position: "absolute", right: "0%", bottom: "0%" }}>
          <ControlButton icon="edit" onClick={() => onEdit(data.Id, "smartheat")} />
          <ControlButton icon="delete" onClick={() => onDelete(data.Id)} />
        </div>
      </div>
      <DeviceContainer devices={data.Devices} visible={isExpanded} />
    </div>
  );
};

const gatewayStatus = (isOnline: boolean, hasAlarm: boolean) => {
  return isOnline ? (hasAlarm ? styles.gateway_card_alarm : styles.gateway_card_online) : styles.gateway_card_offline;
};
