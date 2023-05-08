import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "modals";
import { useReducer } from "react";
import GatewayModalStore from "../Store";
import reducer from "./reducer";
import { service } from "../service";
import { IGatewayData } from "../types";

export const useEditGatewayCard = () => {
  const [state, dispatch] = useReducer(reducer, {data: null, api:"", hasError: true});
  const gatewayModalStore = GatewayModalStore((store) => store);
  const toast = useToast();

  const fetchGetGatewayData = useQuery({
    queryKey: ["gatewaydata", gatewayModalStore.gatewayId],
    queryFn: () =>{
        return service.getModemData(gatewayModalStore.gatewayId, gatewayModalStore.gatewayType)
    }
  });

  const fetchSaveGateway = useMutation({
    mutationFn: (data: IGatewayData) => {
      toast({ label: "Сохранение гейтвея", type: "info" });
      return service.editModem(gatewayModalStore.gatewayId, data);
    },
    onSuccess: (data) => {
      if (data.ok) {
        toast({ label: "Успех", type: "success" });
        gatewayModalStore.callback();
        gatewayModalStore.close();
      } else {
        toast({ label: data.message, type: "error" });
      }
    },
  });

  const saveGateway = (data: IGatewayData) => {
    fetchSaveGateway.mutate({ data: {...data.data, ObjectId: gatewayModalStore.objectId}, api: gatewayModalStore.gatewayType});
  };

  return {
    clientState:{
      state,
      dispatch,
      close: gatewayModalStore.close,
      hasError: state?.hasError,
      gatewayType: gatewayModalStore.gatewayType
      
    },
    serverState:{
      data: fetchGetGatewayData.data?.data,
      loading: fetchSaveGateway.isLoading || fetchGetGatewayData.isLoading,
      saveGateway
    }
  };
};
