import React, { useMemo } from "react";
import styles from "./AllObjects.module.css";
import { useObjects } from "./useObjects"; 
import { _objectStates, _pageSizes } from "../../assets/data/data";
import { actionType } from "./reducer";
import { ObjectModalContainer, useActionModal, useObjectsModal, useToast } from "modals";
import { ObjectsTable, PageHeader, RequireRight } from "components";
import { Button, DropDown, DropDownMultiSelect, FilterInput, Pagination } from "ui";

export const AllObjects = () => {
  // console.log("Objects");

  const {clientState, serverState} = useObjects();
  const objectModal = useObjectsModal();
  const actionModal = useActionModal();
  const toast = useToast();

  //Изменить страницу
  const changePage = (selectedPageId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_PAGE,
      payload: selectedPageId
    });
  };

  //Изменить фильтр
  const changeFilter = (filterText: string) => {
    clientState.dispatch({
      type: actionType.CHANGE_FILTER,
      payload: filterText
    });
  };

  //Изменить фильтр по состояниям
  const filterByState = (selectedStateId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_OBJECT_STATE,
      payload: selectedStateId
    });
  };

  const filterByDomains = (ids: number[]) => {
    clientState.dispatch({
      type: actionType.CHANGE_BY_DOMAINS,
      payload: ids
    });
  };

  const filetBySCompanies = (ids: number[]) => {
    clientState.dispatch({
      type: actionType.CHANGE_BY_SCOMPANIES,
      payload: ids
    });
  };

  //Изменить фильтр по состояниям
  const changePageSize = (selectedPageSizeId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_PAGE_SIZE,
      payload: selectedPageSizeId
    });
  };

  //Добавить объект
  const addObjectModal = () =>{
    objectModal.add(()=> serverState.refetch());
  }

  //Изменить объект
  const editObjectModal = (objectId: number) =>{
    objectModal.edit(objectId, ()=> serverState.refetch());
  }

  //Удалить объект
  const deleteObjectModal = (objectId: number) =>{
    actionModal.open(
      "Удаление объекта", 
      "Вы уверены, что хотите удалить объект?", 
      async ()=> {
        toast({label:"Удаление объекта", type:"info"});
        const res = await serverState.deleteObject(objectId);

        if (res.ok)        
          toast({label:"Объект удален", type:"success"});
        else
          toast({label:res.message, type:"error"});   
                
        actionModal.close();
        serverState.refetch();    
      });
  }

  //Очистить фильтры
  const clearFilters = () =>{
    clientState.dispatch({
      type: actionType.CLEAR_FILTERS,
      payload: null
    });
  }

  const _filter = useMemo(() => <FilterInput value={clientState.state.filter} onChange={changeFilter} />, []);
  const _dropdown_states = useMemo(() => <DropDown label="СОСТОЯНИЕ" data={_objectStates} onSelect={filterByState} firstElement="FirstElement"/>, []);
  const _dropdown_domains = useMemo(() => <DropDownMultiSelect label="КОМПАНИЯ" data={serverState.domains} onSelect={filterByDomains} selected={clientState.state.selectedDomains} filter={true} emptyText={"Все"}/>, [serverState.domains, clientState.state.selectedDomains]);
  const _dropdown_scompanies = useMemo(() => <DropDownMultiSelect label="СЕРВИСНАЯ КОМПАНИЯ" data={serverState.scompanies} onSelect={filetBySCompanies} selected={clientState.state.selectedSCompanies} filter={true} emptyText={"Все"} />, [serverState.scompanies, clientState.state.selectedSCompanies]);
  const _table = useMemo(() => <ObjectsTable rowsData={serverState.objectsData?.data} onEdit={editObjectModal} onDelete={deleteObjectModal}/>,[serverState.objectsData?.data]);
  const _pagination = useMemo(() => <Pagination pageNumber={clientState.state.pageNumber} totalCount={serverState.objectsData?.total} pageSize={clientState.state.pageSize} onChange={changePage}/>,[clientState.state.pageNumber, serverState.objectsData?.total, clientState.state.pageSize]);
  const _dropdown_limits = useMemo(() => <DropDown data={_pageSizes} onSelect={changePageSize} firstElement="FirstElement"/>, []);

  return (
    <>
      <div className={styles.content}>
        <PageHeader icon="big_home" label="Главная"/>

        <div className={styles.row}>
          {_dropdown_states}
          {_dropdown_domains}
          {_dropdown_scompanies}
          <Button label="ОЧИСТИТЬ ФИЛЬТРЫ" icon="round_cross" onClick={clearFilters}/>
        </div>

        <div className={styles.row}>
          <RequireRight>
            <Button label="ДОБАВИТЬ ОБЪЕКТ" icon="round_plus" type="info" onClick={addObjectModal}/>
          </RequireRight>
          {_filter}
        </div>

        {_table}

        <div {...{disabled: serverState.loading}} className={styles.row}>
          {_dropdown_limits}
          {_pagination}
        </div>
      </div>
      
      <ObjectModalContainer/>
    </>
  );
};
