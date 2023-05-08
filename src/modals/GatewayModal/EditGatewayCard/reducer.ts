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
      return { api: "editsmd", data: action.data, hasError: action.data.hasError };
    case "modem":
      return { api: "editmodem", data: action.data, hasError: action.data.hasError };
    case "monitorunit":
      return { api: "editmonitorunit", data: action.data, hasError: action.data.hasError };
    case "pmc":
      return { api: "editpmc", data: action.data, hasError: action.data.hasError };
    case "ecl4":
      return { api: "editecl4", data: action.data, hasError: action.data.hasError };
    case "smartheat":
      return { api: "editsmartheat", data: action.data, hasError: action.data.hasError };

    default:
      throw new Error();
  }
};

export default reducer;
