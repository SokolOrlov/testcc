import React from "react";
import { actionType } from "./reducer";
import useObjectModal from "./useObjectModal";
import styles from "./ObjectModal.module.css";
import { Button, DropDown, Modal, TextInput } from "../../UI";

const ObjectModal = () => {
  const { clientState, serverState } = useObjectModal();
// console.log(serverState.loading);

  //Изменить имя объекта
  const changeObjectName = (name: string) => {
    clientState.dispatch({ type: actionType.CHANGE_OBJECT_NAME, payload: name });
  };

  //Изменить идентификатор
  const changeIdentificator = (name: string) => {
    clientState.dispatch({ type: actionType.CHANGE_IDENTIFICATOR, payload: name });
  };

  //Изменить компанию
  const selectCompany = (companyId: number) => {
    clientState.dispatch({ type: actionType.CHANGE_COMPANY, payload: companyId });
  };

  //Изменить сервисную компанию
  const selectSCompany = (scompanyId: number) => {
    clientState.dispatch({ type: actionType.CHANGE_SCOMPANY, payload: scompanyId });
  };

  //Сохранить изменения
  const saveObject = () => {
    serverState.saveObject();
  };

  return (
    <Modal title={clientState.title} onClose={clientState.close} show={clientState.show}>
      <div {...{disabled: serverState.loading}}>
        <div className={styles.body}>
          <TextInput label="ИМЯ" value={clientState.state.objectName} onChange={changeObjectName} />
          <TextInput label="ИДЕНТИФИКАТОР" value={clientState.state.identificator} onChange={changeIdentificator} />
          <div className={styles.border}>
            <DropDown label="КОМПАНИЯ" data={serverState.domains} selectedId={clientState.state.companyId} onSelect={selectCompany} firstElement="Text" emptyText={"Не выбрано"} filter={true} />
            <DropDown label="СЕРВИСНАЯ КОМПАНИЯ" data={serverState.scompanies} onSelect={selectSCompany} firstElement="Empty" filter={true} />
          </div>
        </div>
        <div className={styles.footer}>
          <Button label="ОТМЕНА" type="danger" onClick={clientState.close} />
          <Button label="СОХРАНИТЬ" type="success" icon="round_ok" onClick={saveObject} />
        </div>
      </div>
    </Modal>
  );
};

export default ObjectModal;
