import React, { useEffect } from "react";
import { actionType } from "./reducer";
import useObjectModal from "./useObjectModal";
import styles from "./ObjectModal.module.css";
import ObjectModalStore from "./Store";
import { useObjectsModal } from "./Container";
import { Button, DropDown, Modal, TextInput } from "../../UI";
import { useToast } from "../../components";

const ObjectModal = () => {
  const show = ObjectModalStore((store) => store.show);
  const objectId = ObjectModalStore((store) => store.id);
  const { clientState, serverState } = useObjectModal(objectId);
  const objectModal = useObjectsModal();
  const toast = useToast();

  useEffect(()=>{
    if (show && objectId === null) {
      clientState.clear();
    }
  }, [show]);

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
  const saveObject = async () => {
    toast({label: "Сохранение объекта", type:"info"});
    const res = await serverState.saveObject();

    if (res.ok) {
      toast({label: "Успех", type:"success"});
      objectModal.callback();
      close();      
    }
    else{
      toast({label:res.message, type:"error"});
    }

  };

  //закрыть модальное окно
  const close = () => {
    objectModal.close();
  };

  return (
    <Modal title={objectId?"Редактирование объекта":"Добавление объекта"} onClose={close} show={show}>
      <div {...{disabled: objectId && serverState.loading}}>
        <div className={styles.body}>
          <TextInput label="ИМЯ" value={clientState.state.objectName} onChange={changeObjectName} />
          <TextInput label="ИДЕНТИФИКАТОР" value={clientState.state.identificator} onChange={changeIdentificator} />
          <div className={styles.border}>
            <DropDown label="КОМПАНИЯ" data={serverState.domains} selectedId={clientState.state.companyId} onSelect={selectCompany} firstElement="Text" emptyText={"Не выбрано"} filter={true} />
            <DropDown label="СЕРВИСНАЯ КОМПАНИЯ" data={serverState.scompanies} onSelect={selectSCompany} firstElement="Empty" filter={true} />
          </div>
        </div>
        <div className={styles.footer}>
          <Button label="ОТМЕНА" type="danger" onClick={close} />
          <Button label="СОХРАНИТЬ" type="success" icon="round_ok" onClick={saveObject} />
        </div>
      </div>
    </Modal>
  );
};

export default ObjectModal;
