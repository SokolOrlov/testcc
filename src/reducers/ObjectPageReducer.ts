
interface Post {
    ObjectId: number;
    ObjectName: string;
    ObjectAddress: string;
    ObjectCoordinates: string;
    DomainId: number;
    Domain: string;
    ServiceCompany: string;
    DeviceGatewayName: string;
    DeviceGatewayId: number;
    IsOnline: boolean;
    AlarmsCount: number;
    AllDeviceCount: number;
    OfflineDeviceCount: number;
  }

interface s {
    posts: Post[]
}

const reducer = (state:any, action:{type:string, payload:{}})=>{

}