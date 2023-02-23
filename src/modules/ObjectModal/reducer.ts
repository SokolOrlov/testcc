export enum actionType {
  CHANGE_OBJECT_NAME = 1,
  CHANGE_IDENTIFICATOR = 2,
  CHANGE_COMPANY = 3,
  CHANGE_SCOMPANY = 4,
  LOAD_OBJECT_DATA = 5
}

type State = {
  Id?: number;
  objectName: string;
  identificator: string;
  companyId?: number;
  scompanyId?: number;
};

type Action = {
  type: actionType;
  payload: string | number | State;
};

export const initialState: State = {
  Id: null,
  companyId: null,
  scompanyId: null,
  objectName: "",
  identificator: ""
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionType.CHANGE_OBJECT_NAME:
      return { ...state, objectName: action.payload as string };
    case actionType.CHANGE_IDENTIFICATOR:
      return { ...state, identificator: action.payload as string };
    case actionType.CHANGE_COMPANY:
      return { ...state, companyId: action.payload as number };
    case actionType.CHANGE_SCOMPANY:
      return { ...state, scompanyId: action.payload as number };
    case actionType.LOAD_OBJECT_DATA:
      return { ...state, ...action.payload as State };
    default:
      throw new Error();
  }
};

export default reducer;
