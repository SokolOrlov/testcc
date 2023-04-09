import React from "react";
import { Gateway } from "./types";
import styles from "./GatewayContainer.module.css";
import { useActionModal, useToast } from "modals";
import { service } from "./service";
import { Ecl4, Modem, MonitorUnit, Pmc, SmartHeat, Smd } from ".";

type Props = {
  gateways: Gateway[];
  refetch: ()=>void
};

export const GatewayContainer: React.FC<Props> = ({ gateways, refetch }) => {
  // const [loading, isLoading] = useState(false);
  const actionModal = useActionModal();
  const toast = useToast();
  
  const deleteGateway =(id: number)=>{
    actionModal.open(
      "Удаление гейтвея", 
      "Вы уверены, что хотите удалить гейтвей?", 
      async ()=> {
        toast({label:"Удаление гейтвея", type:"info"});
        const res =  await service.deleteGateway(id);

        if (res.ok)        
          toast({label:"Гейтвей удален", type:"success"});
        else
          toast({label:res.message, type:"error"});   
                
        actionModal.close();
        refetch();    
      });
  };


  const editGateway =(id: number)=>{
    
    console.log(`edit gateway ${id}`);
    // refetch();
  };


  const gatewayCards = gateways.map((g) => makeGatewayCard(g, deleteGateway, editGateway));

  return <div className={styles.container}>{gatewayCards}</div>;
};

function makeGatewayCard(g: Gateway, del: any, edit: any): React.ReactNode {
  switch (g.DeviceGatewayType.toLowerCase()) {
    case "modem": return <Modem key={g.Id} data={g} onDelete={del} onEdit={edit} />;
    case "ecl4": return <Ecl4 key={g.Id} data={g} onDelete={del} onEdit={edit}/>;
    case "smd": return <Smd key={g.Id} data={g} onDelete={del} onEdit={edit}/>;
    case "pmc": return <Pmc key={g.Id} data={g} onDelete={del} onEdit={edit}/>;
    case "monitorunit": return <MonitorUnit key={g.Id} data={g} onDelete={del} onEdit={edit}/>;
    case "smartheat": return <SmartHeat key={g.Id} data={g} onDelete={del} onEdit={edit}/>;

    default:
      throw Error("Тип гейтвея не найден");
  }
}
