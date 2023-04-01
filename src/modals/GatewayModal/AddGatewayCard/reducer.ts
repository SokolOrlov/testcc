import { IGatewayData } from "./types"

type State = {
    api: string
    data: any
}

export type Action = {
    type: string
    data: any
}

const reducer = (state: State, action: Action): IGatewayData=>{
switch (action.type) {
    case "smd":         return {api: "createsmd",           data: action.data};
    case "modem":       return {api: "createmodem",         data: action.data};
    case "monitorunit": return {api: "createmonitorunit",   data: action.data};
    case "pmc":         return {api: "createpmc",           data: action.data};
    case "ecl4":        return {api: "createecl4",          data: action.data};
    case "smartheat":   return {api: "createsmartheat",     data: action.data};

    default:
        throw new Error();
}
} 

export default reducer;