import React from "react";
import Button from "../../UI/Button/Base/Button";
import DropDown from "../../UI/DropDown/DropDown";
import { FirstElement } from "../../UI/DropDown/types";
import TextInput from "../../UI/Input/Text/TextInput";
import Modal from "../../UI/Modal/Modal";
import { actionType } from "./reducer";
import useObjectModal from "./useObjectModal";
import styles from "./ObjectModal.module.css"
import { ObjectData } from "./types";

type Props = {
  show: boolean;
  data?: ObjectData;
  callback: (arg: any) => void;
  onClose: () => void;
};

const ObjectModal = ({ show, data, onClose, callback }: Props) => {
  const { clientState, serverState } = useObjectModal();

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

  const saveObject = async ()=>{    
    await serverState.saveObject();
    if(callback) callback(1);
  }

  return (
    <Modal title="Добавление объекта" onClose={onClose} show={show}>
      <div className={styles.body}>
        <TextInput label="ИМЯ" value={clientState.state.objectName} onChange={changeObjectName} />
        <TextInput label="ИДЕНТИФИКАТОР" value={clientState.state.identificator} onChange={changeIdentificator} />
        <div className={styles.border}>
          <DropDown label="КОМПАНИЯ" data={serverState.domains} onSelect={selectCompany} firstElement={FirstElement.Text} emptyText={"Не выбрано"} filter={true} />
          <DropDown label="СЕРВИСНАЯ КОМПАНИЯ" data={serverState.scompanies} onSelect={selectSCompany} firstElement={FirstElement.Empty} filter={true} />
        </div>
        <div className={styles.footer}>
        <Button onClick={onClose}>ОТМЕНА</Button>
        <Button onClick={saveObject}>СОХРАНИТЬ</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ObjectModal;
