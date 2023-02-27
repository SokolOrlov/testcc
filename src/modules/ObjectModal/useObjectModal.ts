import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useReducer } from "react";
import { useToast } from "../../components";
import reducer, { actionType, initialState } from "./reducer";
import service from "./service"; 
import ObjectModalStore from "./Store";

const useObjectModal = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const objectModalStore = ObjectModalStore((store) => store);
  const toast = useToast();

  useEffect(()=>{
    if (objectModalStore.show && objectModalStore.id === null) {
      dispatch({type:actionType.CLEAR, payload: null});
    }
  }, [objectModalStore.show]);

  const objectQeury = useQuery({
    queryKey: ["objectData", objectModalStore.id],
    queryFn: () => {
      return service.getObject(objectModalStore.id);
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
    enabled: objectModalStore.id != null
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

  const saveObject = () => {
    fetchSaveObject.mutate();
  };

  const fetchSaveObject = useMutation({
    mutationFn: () => {
      toast({label: "Сохранение объекта", type:"info"});
      return service.saveObject(state.Id, state.objectName, state.identificator, state.companyId, state.scompanyId);
    },
    onSuccess:(data)=>{
      if(data.ok){
        toast({label: "Успех", type:"success"});
        objectModalStore.callback();
        objectModalStore.close();    
      }
      else{
        toast({label:data.message, type:"error"});
      }
    }
  })


  return {
    clientState: {
      state,
      dispatch,
      title: objectModalStore.id ? "Редактирование объекта" : "Добавление объекта",
      show: objectModalStore.show,
      close: objectModalStore.close
    },
    serverState: {
      object: objectQeury.data,
      domains: domainsQeury.data,
      scompanies: scompaniesQeury.data,
      saveObject,
      loading: objectQeury.isFetching || domainsQeury.isFetching || scompaniesQeury.isFetching || fetchSaveObject.isLoading,
       
    },
  };
};

export default useObjectModal;
