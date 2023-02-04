import React from "react";
import Pagination from "../../UI/Pagination/Pagination";
import styles from "./Objects.module.css";
import { useObjects } from "./useObjects"; 
import { _objectStates, _pageSizes } from "../../assets/data/data";
import { actionType } from "./reducer";
import ObjectsTable from "./ObjectsTable";
import DropDown from "../../UI/DropDown/DropDown";
import { FirstElement } from "../../UI/DropDown/types";
import FilterInput from "../../UI/Input/Filter/FilterInput";
import DropDownMultiSelect from "../../UI/DropDown/DropDownMultiSelect";
import ObjectModal from "../../modules/ObjectModal/ObjectModal";
import Button from "../../UI/Button/Base/Button";
import PageHeader from "../../components/PageHeader/PageHeader";

 const Objects = () => {
  // console.log("Objects");

  const {clientState, serverState} = useObjects();

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
  const addObjectModal = (show: boolean) =>{
    clientState.dispatch({
      type: actionType.SHOW_MODAL,
      payload: show
    });
  }

  const editObjectModal = (objectId: number) =>{

  }

  const deleteObjectModal = (objectId: number) =>{

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
          <DropDown label="СОСТОЯНИЕ" data={_objectStates} onSelect={filterByState} firstElement={FirstElement.FirstElement}/>
          <DropDownMultiSelect label="КОМПАНИЯ" data={serverState.domains} onSelect={filterByDomains} selected={clientState.state.selectedDomains} filter={true} emptyText={"Все"}/>
          <DropDownMultiSelect label="СЕРВИСНАЯ КОМПАНИЯ" data={serverState.scompanies} onSelect={filetBySCompanies} selected={clientState.state.selectedSCompanies} filter={true} emptyText={"Все"} />   
          <Button onClick={clearFilters}>ОЧИСТИТЬ ФИЛЬТРЫ</Button>
        </div>

        <div className={styles.row}>
          <Button onClick={()=>addObjectModal(true)}>ДОБАВИТЬ ОБЪЕКТ</Button>
          <FilterInput value={clientState.state.filter} onChange={changeFilter} />
        </div>

        <ObjectsTable rowsData={serverState.objectsData?.data} onEdit={editObjectModal} onDelete={deleteObjectModal}/>

        <div {...{disabled: serverState.loading}} className={styles.row}>
          <DropDown data={_pageSizes} onSelect={changePageSize} firstElement={FirstElement.FirstElement}/>
          <Pagination pageNumber={clientState.state.pageNumber} totalCount={serverState.objectsData?.total} pageSize={clientState.state.pageSize} onChange={changePage}/>
        </div>
      </div>
      
      <ObjectModal onClose={() => addObjectModal(false)} callback={()=>{addObjectModal(false); serverState.refetch()}} show={clientState.state.showObjectModal}/>
    </>
  );
};

export default Objects;
