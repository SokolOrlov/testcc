import { useQuery } from "@tanstack/react-query";
import { useReducer } from "react";
import reducer, { actionType, initialState } from "./reducer";
import service from "./service"; 

const useObjectModal = (id?: number) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const objectQeury = useQuery({
    queryKey: ["objectData", id],
    queryFn: () => {
      return service.getObject(id);
    },
    onSuccess:(data)=>{
      dispatch({
        type:actionType.LOAD_OBJECT_DATA,
        payload: {
          Id: data.Id,
          objectName: data.Name,
          identificator: data.ExternalCode,
          companyId: data.DomainId,
          // scompanyId?: data.,
        }
      });
    },
    refetchOnWindowFocus: false,
    // retry: false,
    // keepPreviousData: true,
    enabled: id != null
  });

  const domainsQeury = useQuery({
    queryKey: ["domains"],
    queryFn: () => {
      return service.getDomains();
    },
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
    initialData: [],
  });

  const scompaniesQeury = useQuery({
    queryKey: ["scompanies"],
    queryFn: () => {
      return service.getSCompanies();
    },
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
    initialData: [],
  });

  const saveObject = async () => {
    return await service.saveObject(state.Id, state.objectName, state.identificator, state.companyId, state.scompanyId);
  };

  const clear = ()=>{
    dispatch({
      type:actionType.CLEAR,
      payload: null
    });
  }

  return {
    clientState: {
      state,
      dispatch,
      clear
    },
    serverState: {
      object: objectQeury.data,
      domains: domainsQeury.data,
      scompanies: scompaniesQeury.data,
      saveObject,
      loading: objectQeury.isLoading || objectQeury.isFetching || domainsQeury.isLoading || domainsQeury.isFetching || scompaniesQeury.isLoading || scompaniesQeury.isFetching,
    },
  };
};

export default useObjectModal;
