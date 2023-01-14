import React from "react";
import Pagination from "../../components/UI/Pagination/Pagination";
import cl from "./Objects.module.css";
import { useObjects } from "./useObjects"; 
import { _objectStates, _pageSizes } from "../../data";
import { actionType } from "./reducer";
import ObjectsTable from "../../components/UI/ObjectsTable/ObjectsTable";
import DropDown from "../../components/UI/DropDown/DropDown";
import { FirstElement } from "../../components/UI/DropDown/types";
import FilterInput from "../../components/UI/Input/Filter/FilterInput";

 const Objects = () => {
  // console.log("Objects");

  const {clientState, serverState} = useObjects();

  //Изменить страницу
  const changePage = (selectedPageId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_PAGE,
      payload: {intValue: selectedPageId}
    });
  };

  //Изменить фильтр
  const changeFilter = (filterText: string) => {
    clientState.dispatch({
      type: actionType.CHANGE_FILTER,
      payload: {strValue: filterText}
    });
  };

  //Изменить фильтр по состояниям
  const filterByState = (selectedStateId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_OBJECT_STATE,
      payload: {intValue: selectedStateId}
    });
  };

  const filterByDomains = (selectedStateId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_BY_DOMAINS,
      payload: {intValue: selectedStateId}
    });
  };

  const filetBySCompanies = (selectedStateId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_BY_SCOMPANIES,
      payload: {intValue: selectedStateId}
    });
  };

  //Изменить фильтр по состояниям
  const changePageSize = (selectedPageSizeId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_PAGE_SIZE,
      payload: {intValue: selectedPageSizeId}
    });
  };

  const divProps={disabled: serverState.loading};

  return (
    <>
      <div className={cl.objects_page}>
        <div>Objects</div>

        <div {...divProps} style={{display: "flex", justifyContent: "space-between", margin: "10px 0px",}}>
          <DropDown data={_objectStates} onSelect={filterByState} firstElement={FirstElement.FirstElement}/>
          <DropDown data={serverState.domainsQeuryData} onSelect={filterByDomains} filter={true} firstElement={FirstElement.Text} emptyText={"Все"}/>
          <DropDown data={serverState.scompaniesQeuryData} onSelect={filetBySCompanies} filter={true} firstElement={FirstElement.Text} emptyText={"Все"} />
          <FilterInput value={clientState.state.filter} onChange={changeFilter} />
        </div>

        <ObjectsTable rowsData={serverState.objectsQeuryData?.data}/>

        <div {...divProps} style={{display: "flex", justifyContent: "space-between",  margin: "10px 0px",}}>
          <DropDown data={_pageSizes} onSelect={changePageSize} firstElement={FirstElement.FirstElement}/>
          <Pagination pageNumber={clientState.state.pageNumber} totalCount={serverState.objectsQeuryData?.total} pageSize={clientState.state.pageSize} onChange={changePage}/>
        </div>
      </div>
    </>
  );
};

export default Objects;
