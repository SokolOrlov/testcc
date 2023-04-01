import { useToast } from "../../Toast/Container";
import GatewayModalStore from "../Store";

export const useEditGatewayCard = ()=>{
    const gatewayModalStore = GatewayModalStore((store) => store);
    const toast = useToast();

    

    return {
        clientState: {
            close: gatewayModalStore.close
        },
        serverState: {
            loading: false
        }
    }
}