import React, { useState } from "react";  
import { Button, Modal } from "../../UI";
import ActionModalStore from "./Store";
import styles from './ActionModal.module.css'

export const ActionModal = () => {
  const actionModalStore = ActionModalStore((store) => store); 
  const [loading, setLoading] = useState(false); 


  //Сохранить изменения
  const saveObject = async () => {
    setLoading(true);
    await actionModalStore.action();
    setLoading(false);
  };

  //закрыть модальное окно
  const close = () => {
    actionModalStore.close();
  };

  return (
    <Modal title={actionModalStore.title} onClose={close} show={actionModalStore.show}>
        <div className={styles.body}>
          <p>{actionModalStore.body}</p>
        </div>
        <div className={styles.footer} {...{disabled: loading}}>
          <Button label="ОТМЕНА" type="danger" onClick={close} />
          <Button label="СОХРАНИТЬ" type="success" icon="round_ok" onClick={saveObject} />
        </div>
    </Modal>
  );
};
