import { useQuery } from "@tanstack/react-query";
import { useReducer } from "react";
import { _pageSizes } from "../../assets/data/data";
import { initialState, reducer } from "./reducer";
import AllObjectsService from "./service";

export const useObjects = ()=>{
    const [state, dispatch] = useReducer(reducer, {
      ...initialState,
      pageSize: _pageSizes[0].value
    });
  
    // console.log('clientState', state);
    
    const objectsQeury = useQuery({
    queryKey: ["allObjects", state],
    queryFn : () =>{ return AllObjectsService.getObjects(state.pageSize, state.pageNumber, state.filter, state.objectState, state.selectedDomains, state.selectedSCompanies)},
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
        domainsQeuryData: domainsQeury.data,
        scompaniesQeuryData: scompaniesQeury.data,
        loading: objectsQeury.isLoading || objectsQeury.isFetching || domainsQeury.isLoading || domainsQeury.isFetching || scompaniesQeury.isLoading || scompaniesQeury.isFetching
      }
    }
  }