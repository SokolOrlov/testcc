import React from "react";
import { Device } from "../types";
import styles from "../../Equipment.module.css";

type Props = {
  data: Device;
};

export const Vlt: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.device_card}>
      <div className={`${styles.device_card_status} ${deviceStatus(data.IsOnline, data.HasAlert)}`}></div>
      <div className={styles.device_card_content}>
      <p className={styles.device_card_name}>{data.Name}</p>
      <div className={styles.device_card_info}>
        <p>{`Тип оборудования: ${data.DeviceTypeName}`}</p>
        <p>{`Сетевой адрес: ${data.Node}`}</p>
        <p>{`Серийный номер: ${data.SerialNumber}`}</p>
        <p>{`Дата последнего отключения: ${data.LastDisconnectString}`}</p>
      </div>
      </div>
    </div>
  );
};


const deviceStatus = (isOnline: boolean, hasAlarm: boolean) => {
  return isOnline ? (hasAlarm ? styles.device_card_alarm : styles.device_card_online) : styles.device_card_offline;
};
