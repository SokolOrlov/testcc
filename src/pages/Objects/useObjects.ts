import { useQuery } from "@tanstack/react-query";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import AllObjectsService from "./service";

export const useObjects = ()=>{
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
    retry: false,
    keepPreviousData: true
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