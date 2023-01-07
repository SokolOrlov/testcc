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
    
    const objectsQeury = useQuery({
    queryKey: ["allObjects", state],
    queryFn : () =>{ return AllObjectsService.getObjects(state.pageSizeId, state.pageNumber, state.filter, state.stateId)},
    refetchOnWindowFocus: false ,
    retry: false,
    keepPreviousData: true
    });

    const domainsQeury = useQuery({
      queryKey: ["domains"],
      queryFn : () =>{ return AllObjectsService.getDomains()},
      refetchOnWindowFocus: false ,
      retry: false,
      keepPreviousData: true,
      initialData:[]
    });

    const scompaniesQeury = useQuery({
      queryKey: ["scompanies"],
      queryFn : () =>{ return AllObjectsService.getSCompanies()},
      refetchOnWindowFocus: false ,
      retry: false,
      keepPreviousData: true,
      initialData:[]
    });
        
    // console.log("serverState", `\ndata: ${data}`, `\nisLoading: ${isLoading}`, `\nisFetching: ${isFetching}`, `\nstatus: ${status}`);
      
  
    return {
      clientState:{
        state,
        dispatch
      },
      serverState:{
        objectsQeuryData: objectsQeury.data,
        objectsQeuryLoading: objectsQeury.isLoading || objectsQeury.isFetching,
        domainsQeuryData: domainsQeury.data,
        domainsQeuryLoading: domainsQeury.isLoading || domainsQeury.isFetching,
        scompaniesQeuryData: scompaniesQeury.data,
        scompaniesQeuryLoading: scompaniesQeury.isLoading || scompaniesQeury.isFetching
      }
    }
  }