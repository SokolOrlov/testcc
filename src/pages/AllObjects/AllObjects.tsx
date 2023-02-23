import React from "react";
import styles from "./AllObjects.module.css";
import { useObjects } from "./useObjects"; 
import { _objectStates, _pageSizes } from "../../assets/data/data";
import { actionType } from "./reducer";
import { ObjectsTable, PageHeader } from "../../components";
import { ObjectModalContainer, useObjectsModal } from "../../modules/ObjectModal";
import { Button, DropDown, DropDownMultiSelect, FilterInput, Pagination } from "../../UI";

export const AllObjects = () => {
  // console.log("Objects");

  const {clientState, serverState} = useObjects();
  const objectModal = useObjectsModal();
  // const {actionModal} = actionModal();

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
    // actionModal.show({
    //   type: "delete",
    //   tytle: "Удаление объекта",
    //   body: "Вы уверены, что хотите удалить объект?",
    //   onSuccess:()=>{}
    // });
  }

  //Очистить фильтры
  const clearFilters = () =>{
    clientState.dispatch({
      type: actionType.CLEAR_FILTERS,
      payload: null
    });
  }

  return (
    <>
      <div className={styles.content}>
        <PageHeader label="Главная"/>

        <div className={styles.row}>
          <DropDown label="СОСТОЯНИЕ" data={_objectStates} onSelect={filterByState} firstElement="FirstElement"/>
          <DropDownMultiSelect label="КОМПАНИЯ" data={serverState.domains} onSelect={filterByDomains} selected={clientState.state.selectedDomains} filter={true} emptyText={"Все"}/>
          <DropDownMultiSelect label="СЕРВИСНАЯ КОМПАНИЯ" data={serverState.scompanies} onSelect={filetBySCompanies} selected={clientState.state.selectedSCompanies} filter={true} emptyText={"Все"} />   
          <Button label="ОЧИСТИТЬ ФИЛЬТРЫ" icon="round_cross" onClick={clearFilters}/>
        </div>

        <div className={styles.row}>
          <Button label="ДОБАВИТЬ ОБЪЕКТ" icon="round_plus" type="info" onClick={addObjectModal}/>
          <FilterInput value={clientState.state.filter} onChange={changeFilter} />
        </div>

        <ObjectsTable rowsData={serverState.objectsData?.data} onEdit={editObjectModal} onDelete={deleteObjectModal}/>

        <div {...{disabled: serverState.loading}} className={styles.row}>
          <DropDown data={_pageSizes} onSelect={changePageSize} firstElement="FirstElement"/>
          <Pagination pageNumber={clientState.state.pageNumber} totalCount={serverState.objectsData?.total} pageSize={clientState.state.pageSize} onChange={changePage}/>
        </div>
      </div>
      
      <ObjectModalContainer/>
    </>
  );
};
