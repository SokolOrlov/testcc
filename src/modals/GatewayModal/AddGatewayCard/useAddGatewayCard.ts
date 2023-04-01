import { useMutation } from "@tanstack/react-query";
import { useToast } from "modals";
import { useReducer } from "react";
import GatewayModalStore from "../Store";
import reducer from "./reducer";
import { service } from "./service";
import { IGatewayData } from "./types";

export const useAddGatewayCard = () => {
  const [state, dispatch] = useReducer(reducer, null);
  const gatewayModalStore = GatewayModalStore((store) => store);
  const toast = useToast();

  const saveGateway = (data: IGatewayData) => {
    fetchSaveGateway.mutate({data: {...data.data, ObjectId: gatewayModalStore.objectId}, api: data.api});
  };

  const fetchSaveGateway = useMutation({
    mutationFn: (data: IGatewayData) => {
      toast({ label: "Сохранение гейтвея", type: "info" });
      return service.addModem(data);
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

  return {
    clientState:{
      state,
      dispatch,
      close: gatewayModalStore.close,
      hasError: state?.hasError
      
    },
    serverState:{
      loading: fetchSaveGateway.isLoading,
      saveGateway}
  };
};
