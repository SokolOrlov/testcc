import React from "react";
import { actionType } from "./reducer";
import useObjectModal from "./useObjectModal";
import styles from "./ObjectModal.module.css";
import { ObjectData } from "./types";
import ObjectModalStore from "./Store";
import { useObjectsModal } from "./Container";
import { Button, DropDown, Modal, TextInput } from "../../UI";

type Props = {
  show: boolean;
  data?: ObjectData;
  callback: (arg: any) => void;
  onClose: () => void;
};

const ObjectModal = () => {
  const { clientState, serverState } = useObjectModal();

  const objectModal = useObjectsModal();
  const show = ObjectModalStore(store=>store.show)
console.log(show);



  const changeObjectName = (name: string) => {
    clientState.dispatch({ type: actionType.CHANGE_OBJECT_NAME, payload: name });
  };
  const changeIdentificator = (name: string) => {
    clientState.dispatch({ type: actionType.CHANGE_IDENTIFICATOR, payload: name });
  };

  const selectCompany = (companyId: number) => {
    clientState.dispatch({ type: actionType.CHANGE_COMPANY, payload: companyId });
  };

  const selectSCompany = (scompanyId: number) => {
    clientState.dispatch({ type: actionType.CHANGE_SCOMPANY, payload: scompanyId });
  };

  const saveObject = async () => {
    await serverState.saveObject();
    objectModal.callback();
    objectModal.close();
  };

  const close = ()=>{
    objectModal.close();
  }

  return (
    <Modal title="Добавление объекта" onClose={close} show={show}>
      <div className={styles.body}>
        <TextInput label="ИМЯ" value={clientState.state.objectName} onChange={changeObjectName} />
        <TextInput label="ИДЕНТИФИКАТОР" value={clientState.state.identificator} onChange={changeIdentificator} />
        <div className={styles.border}>
          <DropDown label="КОМПАНИЯ" data={serverState.domains} onSelect={selectCompany} firstElement="Text" emptyText={"Не выбрано"} filter={true} />
          <DropDown label="СЕРВИСНАЯ КОМПАНИЯ" data={serverState.scompanies} onSelect={selectSCompany} firstElement="Empty" filter={true} />
        </div>
      </div>
      <div className={styles.footer}>
        <Button label="ОТМЕНА" type="danger" onClick={close} />
        <Button label="СОХРАНИТЬ" type="success" icon="round_ok" onClick={saveObject} />
      </div>
    </Modal>
  );
};

export default ObjectModal;
