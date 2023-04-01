import GatewayModalStore from "./Store";

export const useGatewayModal = () => {
  const gatewayModalStore = GatewayModalStore((store) => store);

  return {
    clientState: {
      isAdd: gatewayModalStore.gatewayId == null,
      title: gatewayModalStore.gatewayId ? "Редактирование гейтвея" : "Добавление гейтвея",
      show: gatewayModalStore.show,
      close: gatewayModalStore.close,
    },
    serverState: {
      objectId: gatewayModalStore.objectId,
      callback: gatewayModalStore.callback,
    },
  };
};
