import React, { useEffect, useMemo, useReducer } from "react";
import AllObjectsService from "../../Services/AllObjectsService";
import DropDown, { FirstElement } from "../../components/UI/DropDown/DropDown";
import FindInput from "../../components/UI/Find/FindInput";
import Pagination from "../../components/UI/Pagination/Pagination";
import Table from "../../components/UI/Table/Table";
import { reducer, initialState, ObjectPageState } from "../../reducers/ObjectPageReducer";

import cl from "./Objects.module.css";
import { useQuery } from "@tanstack/react-query";


const useObjects = ()=>{
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    states: AllObjectsService.getObjectStates(),
    pageSizes: AllObjectsService.getLimits()
  });

  // console.log('clientState', state);
  
  const { data, isLoading, isFetching, status } = useQuery({
  queryKey: ["allObjects", state],
  queryFn : () =>{ return AllObjectsService.getObjectsWithGateways(state.pageSizeId, state.pageNumber, state.filter, state.stateId)},
  refetchOnWindowFocus: false ,
  retry: false
  });

  // console.log("serverState", `\ndata: ${data}`, `\nisLoading: ${isLoading}`, `\nisFetching: ${isFetching}`, `\nstatus: ${status}`);
    

  return {
    clientState:{
      state,
      dispatch
    },
    serverState:{
      data,
      loading: isLoading || isFetching
    }
  }
}






const Objects = () => {
  // console.log("Objects");

  const {clientState, serverState} = useObjects();


  // AllObjectsService.setState(state);

  /**Загрузка начальных данных */
  useEffect(() => {
    // AllObjectsService
    // .getObjectsWithGateways(state.pageSizeId, state.pageNumber, state.filter, state.stateId)
    // .then(res=>{
    //   dispatch({
    //     type: "init",
    //     payload: {
    //       objectStates: AllObjectsService.getObjectStates(),
    //       objectsOnPage: res,
    //       objectLimits: AllObjectsService.getLimits(),
    //     },
    //   });
    // })
  }, []);

  /**
   * Изменить страницу
   * @param selectedPage Номер выбранной страницы
   */
  const changePage = (selectedPage: number) => {
    // const st = AllObjectsService.getState();
    // AllObjectsService.getObjectsWithGateways(st.pageSizeId, selectedPage, st.filter, st.stateId).then((res) => {
    //   dispatch({
    //     type: "change_page",
    //     payload: {
    //       intValue: selectedPage,
    //       objectsOnPage: res,
    //     },
    //   });
    // });
  };

  /**
   * Изменить фильтр
   * @param filterText Текст фильтра
   */
  const changeFilter = (filterText: string) => {
    clientState.dispatch({
      type: "change_filter",
      payload: {strValue: filterText}
    })
    // qclient.refetchQueries(["random"])
    // const st = AllObjectsService.getState();    
    // AllObjectsService.getObjectsWithGateways(st.pageSizeId, 1, filterText, st.stateId).then((res) => {
    //   dispatch({
    //     type: "change_filter",
    //     payload: {
    //       strValue: filterText,
    //       objectsOnPage: res,
    //     },
    //   });
    // });
  };

  /**
   * Изменить фильтр по состояниям
   * @param selectedStateId Id выбранного состояния
   */
  const changeState = (selectedStateId: number) => {
    // const st = AllObjectsService.getState();
    // AllObjectsService.getObjectsWithGateways(st.pageSizeId, 1, st.filter, selectedStateId).then((res) => {
    //   dispatch({
    //     type: "change_state",
    //     payload: {
    //       intValue: selectedStateId,
    //       objectsOnPage: res,
    //     },
    //   });
    // });
  };

  /**
   * Изменить фильтр по состояниям
   * @param selectedLimitId Id выбранного состояния
   */
  const changePageSize = (selectedPageSizeId: number) => {
    // const st = AllObjectsService.getState();
    // AllObjectsService.getObjectsWithGateways(selectedPageSizeId, 1, st.filter, st.stateId).then((res) => {
    //   dispatch({
    //     type: "change_limit",
    //     payload: {
    //       intValue: selectedPageSizeId,
    //       objectsOnPage: res,
    //     },
    //   });
    // });
  };

  const [headers, rows] = AllObjectsService.getTableData(serverState.data?.data);

  const _filter = useMemo(() => <FindInput onChange={changeFilter} />, []);
  const _dropdown_states = useMemo(() => (<DropDown data={clientState.state.states} onSelect={changeState} filter={true} firstElement={FirstElement.FirstElement}/>), [clientState.state.states]);
  const _table = useMemo(() => <Table headers={headers} rows={rows} />,[serverState.data?.data]);
  // const _pagination = useMemo(() => (<Pagination page={clientState.state.pageNumber} totalPages={clientState.state.totalPages} onChange={changePage}/> ),[clientState.state.pageNumber, clientState.state.totalPages]);
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
          {/* {_pagination}           */}
        </div>
      </div>
    </>
  );
};

export default Objects;
