import React, { useMemo } from "react";
import AllObjectsService from "./service";
import DropDown, { FirstElement } from "../../components/UI/DropDown/DropDown";
import FindInput from "../../components/UI/Find/FindInput";
import Pagination from "../../components/UI/Pagination/Pagination";
import Table from "../../components/UI/Table/Table";

import cl from "./Objects.module.css";
import { useObjects } from "./useObjects";

 const Objects = () => {
  // console.log("Objects");

  const {clientState, serverState} = useObjects();

  //Изменить страницу
  const changePage = (selectedPage: number) => {
    clientState.dispatch({
      type: "change_page",
      payload: {intValue: selectedPage}
    });
  };

  //Изменить фильтр
  const changeFilter = (filterText: string) => {
    clientState.dispatch({
      type: "change_filter",
      payload: {strValue: filterText}
    });
  };

  //Изменить фильтр по состояниям
  const changeState = (selectedStateId: number) => {
    clientState.dispatch({
      type: "change_state",
      payload: {intValue: selectedStateId}
    });
  };

  //Изменить фильтр по состояниям
  const changePageSize = (selectedPageSizeId: number) => {
    clientState.dispatch({
      type: "change_limit",
      payload: {intValue: selectedPageSizeId}
    });
  };

  const [headers, rows] = AllObjectsService.getTableData(serverState.data?.data);
  const pageSize = clientState.state.pageSizes.find((l) => l.id == clientState.state.pageSizeId)?.value;

  const _filter = useMemo(() => <FindInput onChange={changeFilter} />, []);
  const _dropdown_states = useMemo(() => (<DropDown data={clientState.state.states} onSelect={changeState} filter={true} firstElement={FirstElement.FirstElement}/>), [clientState.state.states]);
  const _table = useMemo(() => <Table headers={headers} rows={rows} />,[serverState.data?.data]);
  const _pagination = useMemo(() => (<Pagination pageNumber={clientState.state.pageNumber} totalCount={serverState.data?.total} countOnPage={pageSize} onChange={changePage}/>),[clientState.state.pageNumber, serverState.data?.total, pageSize]);
  const _dropdown_limits = useMemo(() => (<DropDown data={clientState.state.pageSizes} onSelect={changePageSize} firstElement={FirstElement.FirstElement}/>), [clientState.state.pageSizes]);

  return (
    <>
      <div className={cl.objects_page}>
        <div>Objects</div>

        <div style={{display: "flex", justifyContent: "space-between", margin: "10px 0px",}}>
          {_dropdown_states}
          {_filter}
        </div>

        {_table}

        <div style={{display: "flex", justifyContent: "space-between",  margin: "10px 0px",}}>
          {_dropdown_limits}
          {_pagination}
        </div>
      </div>
    </>
  );
};

export default Objects;
