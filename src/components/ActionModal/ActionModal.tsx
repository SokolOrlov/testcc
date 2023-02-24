import React from "react";  
import { Button, DropDown, Modal, TextInput } from "../../UI";
import { useToast } from "..";
import { useActionModal } from "./Container";
import ActionModalStore from "./Store";
import styles from './ActionModal.module.css'

export const ActionModal = () => {
  const show = ActionModalStore((store) => store.show); 
  const actionModal = useActionModal();
  const toast = useToast();


  //Сохранить изменения
  const saveObject = async () => {
    actionModal.action();
  };

  //закрыть модальное окно
  const close = () => {
    actionModal.close();
  };

  return (
    <Modal title={actionModal.title} onClose={close} show={show}>
      {/* <div {...{disabled: objectId && serverState.loading}}> */}
      <div>
        <div className={styles.body}>
          <p>{actionModal.body}</p>
        </div>
        <div className={styles.footer}>
          <Button label="ОТМЕНА" type="danger" onClick={close} />
          <Button label="СОХРАНИТЬ" type="success" icon="round_ok" onClick={saveObject} />
        </div>
      </div>
    </Modal>
  );
};
