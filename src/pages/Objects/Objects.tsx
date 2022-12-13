import React, { useEffect, useMemo, useReducer } from "react";
import AllObjectsService from "../../API/AllObjectsService";
import DropDown, { FirstElement } from "../../components/UI/DropDown/DropDown";
import FindInput from "../../components/UI/Find/FindInput";
import Pagination from "../../components/UI/Pagination/Pagination";
import Table from "../../components/UI/Table/Table";
import {reducer, initialState} from "../../reducers/ObjectPageReducer"

import cl from "./Objects.module.css";

const Objects = () => {
  console.log("Objects");

  const [state, dispatch] = useReducer(reducer, initialState);

  /**Загрузка начальных данных */
  useEffect(() => {
     Promise.all([
      AllObjectsService.getObjectStates(), 
      AllObjectsService.getObjectsWithGateways( state.pageLimit, state.pageNumber, state.filter, state.stateNumber )])
      .then(result=> {      
        dispatch({
        type:"init",
        payload:{
          s:result[0],
          o:result[1]
        }
      })
    });
  }, []);

  /**
   * Изменить страницу
   * @param selectedPage Номер выбранной страницы
   */
  const changePage = (selectedPage: number) => {
    AllObjectsService.getObjectsWithGateways( state.pageLimit, selectedPage, state.filter, state.stateNumber )
    .then(res=>{
      dispatch({
        type:"change_page",
        payload:{
          num: selectedPage,
          o: res
        }
      })
    })
  };

  /**
   * Изменить фильтр
   * @param filterText Текст фильтра
   */
  const changeFilter = (filterText: string) => {
    AllObjectsService.getObjectsWithGateways( state.pageLimit, 1, filterText, state.stateNumber )
    .then(res=>{
      dispatch({
        type:"change_filter",
        payload:{
          str: filterText,
          o: res
        }
      })
    })
  };

  /**
   * Изменить фильтр по состояниям
   * @param selectedState Id выбранного состояния
   */
  const changeState = (selectedState: number) => {
    AllObjectsService.getObjectsWithGateways( state.pageLimit, 1, state.filter, selectedState )
    .then(res=>{
      dispatch({
        type:"change_state",
        payload:{
          num:selectedState,
          o: res
        }
      })
    })
  };

  const [headers,rows] = AllObjectsService.getTableData(state.posts) ;

  const _filter = useMemo(()=> <FindInput onChange={changeFilter} />,[]);
  const _dropdown = useMemo(()=><DropDown data={state.states} onSelect={changeState} filter={true} firstElement={FirstElement.FirstElement}/>,[state.states]);
  const _table = useMemo(()=><Table headers={headers} rows={rows} />,[state.posts])
  const _pagination = useMemo(()=><Pagination page={state.pageNumber} totalPages={state.totalPages} onChange={changePage} />,[state.pageNumber, state.totalPages])
  console.log(state);
  return (
    <>
      <div className={cl.objects_page}>
        <div>Objects</div>

        <div style={{display:"flex", justifyContent:"space-between", margin:"10px 0px"}}>
          {_dropdown}
          {_filter}
        </div>

        {_table}
        {_pagination}
      </div>
    </>
  );
};

export default Objects;
