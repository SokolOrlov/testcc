import { useQuery } from "@tanstack/react-query";
import { useReducer } from "react";
import reducer, { actionType, initialState } from "./reducer";
import service from "./service"; 

const useObjectModal = (id?: number) => {
  console.log("onjectid", id);
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const objectQeury = useQuery({
    queryKey: ["objectData",id],
    queryFn: () => {
      return service.getObject(id);
    },
    onSuccess:(data)=>{
      console.log("onSuccess",data);
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
    await service.saveObject(state.Id, state.objectName, state.identificator, state.companyId, state.scompanyId);
  };

  return {
    clientState: {
      state,
      dispatch,
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
