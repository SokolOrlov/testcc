import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { service } from "./service";

export function useDevices(){
    const { id } = useParams();


    const devicesQeury = useQuery({
        queryKey: ["devicesQeury", id],
        queryFn: () => {
          return service.getObjectDevices(id);
        },
        refetchOnWindowFocus: false,
        retry: false,
        keepPreviousData: true,
      });


    return {
        clientState : {}, 
        serverState: {
            loading: devicesQeury.isFetching,
            devices: devicesQeury.data
        }
    }
}