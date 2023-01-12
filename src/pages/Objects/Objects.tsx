import React, { useMemo } from "react";
import DropDown, { FirstElement } from "../../components/UI/DropDown/DropDown";
import FindInput from "../../components/UI/Find/FindInput";
import Pagination from "../../components/UI/Pagination/Pagination";
import Table from "../../components/UI/Table/Table";

import cl from "./Objects.module.css";
import { useObjects } from "./useObjects";
import TableSettings from "./tableSettings";
import { _objectStates, _pageSizes } from "../../data";
import { actionType } from "./reducer";

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
      type: actionType.CHANGE_OBJECTSTATE,
      payload: {intValue: selectedStateId}
    });
  };

  const filterByDomains = (selectedStateId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_OBJECTSTATE,
      payload: {intValue: selectedStateId}
    });
  };

  const filetBySCompanies = (selectedStateId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_OBJECTSTATE,
      payload: {intValue: selectedStateId}
    });
  };

  //Изменить фильтр по состояниям
  const changePageSize = (selectedPageSizeId: number) => {
    clientState.dispatch({
      type: actionType.CHANGE_PAGESIZE,
      payload: {intValue: selectedPageSizeId}
    });
  };

  const [headers, rows] = TableSettings.getTableData(serverState.objectsQeuryData?.data);
  const divProps={disabled: serverState.loading}

  const _filter = useMemo(() => <FindInput onChange={changeFilter} />, []);
  const _dropdown_states = useMemo(() => (<DropDown data={_objectStates} onSelect={filterByState} firstElement={FirstElement.FirstElement}/>), []);
  const _dropdown_domains = useMemo(() => (<DropDown data={serverState.domainsQeuryData} onSelect={filterByDomains} filter={true} firstElement={FirstElement.Text} emptyText={"Все"}/>), [serverState.domainsQeuryData]);
  const _dropdown_scompanies = useMemo(() => (<DropDown data={serverState.scompaniesQeuryData} onSelect={filetBySCompanies} filter={true} firstElement={FirstElement.Text} emptyText={"Все"} />), [serverState.scompaniesQeuryData]);
  const _table = useMemo(() => <Table headers={headers} rows={rows} />,[serverState.objectsQeuryData?.data]);
  const _pagination = useMemo(() => (<Pagination pageNumber={clientState.state.pageNumber} totalCount={serverState.objectsQeuryData?.total} pageSize={clientState.state.pageSize} onChange={changePage}/>),[clientState.state.pageNumber, serverState.objectsQeuryData?.total, clientState.state.pageSize]);
  const _dropdown_limits = useMemo(() => (<DropDown data={_pageSizes} onSelect={changePageSize} firstElement={FirstElement.FirstElement}/>), []);
 



  return (
    <>
      <div className={cl.objects_page}>
        <div>Objects</div>

        <div {...divProps} style={{display: "flex", justifyContent: "space-between", margin: "10px 0px",}}>
          {_dropdown_states}
          {_dropdown_domains}
          {_dropdown_scompanies}
          {_filter}
        </div>

        {_table}

        <div {...divProps} style={{display: "flex", justifyContent: "space-between",  margin: "10px 0px",}}>
          {_dropdown_limits}
          {_pagination}
        </div>
      </div>
    </>
  );
};

export default Objects;
