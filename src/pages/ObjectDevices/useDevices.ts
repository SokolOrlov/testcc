import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { service } from "./service";

export function useDevices() {
  const { id } = useParams();
  // console.log('id',id);

  const devicesQeury = useQuery({
    queryKey: ["devicesQeury", id],
    queryFn: () => {
      return service.getObjectDevices(id);
    },
    refetchOnWindowFocus: false,
    retry: false,
    keepPreviousData: true,
    initialData: [],
  });


  return {
    clientState: {},
    serverState: {
      objectId: Number.parseInt(id),
      loading: devicesQeury.isFetching,
      gateways: devicesQeury.data,
      refetch: devicesQeury.refetch
    },
  };
}
