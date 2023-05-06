type State = {
  api: string;
  data: any;
  hasError: boolean;
};

export type Action = {
  type: string;
  data: any;
  hasError: boolean;
};

const reducer = (state: State, action: Action): State => {  
  switch (action.type) {
    case "smd":
      return { api: "createsmd", data: action.data, hasError: action.data.hasError };
    case "modem":
      return { api: "createmodem", data: action.data, hasError: action.data.hasError };
    case "monitorunit":
      return { api: "createmonitorunit", data: action.data, hasError: action.data.hasError };
    case "pmc":
      return { api: "createpmc", data: action.data, hasError: action.data.hasError };
    case "ecl4":
      return { api: "createecl4", data: action.data, hasError: action.data.hasError };
    case "smartheat":
      return { api: "createsmartheat", data: action.data, hasError: action.data.hasError };

    default:
      throw new Error();
  }
};

export default reducer;
