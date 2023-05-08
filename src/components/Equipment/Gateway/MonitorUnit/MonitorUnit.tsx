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

export const MonitorUnit: React.FC<Props> = ({ data, onDelete, onEdit }) => {
  const [isExpanded, setExpand] = useState(false);

  return (
    <div className={styles.equipment}>
      <div className={styles.gateway_card} onClick={() => setExpand(!isExpanded)}>
        <Svg id="devices_modem_on" className={`${styles.gateway_card_icon} ${gatewayStatus(data.IsOnline, data.AlarmedDeviceCount > 0)}`} />
        <div className={styles.gateway_card_data}>
          <p className={styles.gateway_card_name}>БЛОК МОНИТОРИНГА</p>
          <div className={styles.gateway_card_info}>
            <p>{`Версия ПО: ${data.SoftwareVersion}`}</p>
            <p>{`IP-адрес: ${data.SerialNumber}`}</p>
            <p>{`Дата последнего отключения: ${data.LastDisconnectString}`}</p>
            <p>{`Дата последней синхронизации: ${data.LastSyncDateValueHistoryString}`}</p>
          </div>
        </div>
        <Svg id="caret_small" className={`${styles.gateway_card_expand_icon} ${isExpanded ? styles.gateway_card_expanded : styles.gateway_card_collapsed}`} />
        <div className={styles.controls} style={{ position: "absolute", right: "0%", bottom: "0%" }}>
          <ControlButton icon="edit" onClick={() => onEdit(data.Id, "monitorunit")} />
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
