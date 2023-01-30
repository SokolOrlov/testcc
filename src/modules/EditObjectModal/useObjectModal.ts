import { useQuery } from "@tanstack/react-query";
import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import service from "./service";

const useObjectModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    await service.saveObject(state.objectName, state.identificator, state.companyId, state.scompanyId);
  };

  return {
    clientState: {
      state,
      dispatch,
    },
    serverState: {
      domains: domainsQeury.data,
      scompanies: scompaniesQeury.data,
      saveObject,
      loading: domainsQeury.isLoading || domainsQeury.isFetching || scompaniesQeury.isLoading || scompaniesQeury.isFetching,
    },
  };
};

export default useObjectModal;
