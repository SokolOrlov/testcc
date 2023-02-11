import { _objectStates, _pageSizes } from "../../assets/data/data";

/**Состояние страницы "Все объекты" */
type State = {
  pageNumber: number;
  filter: string;
  pageSize: number;
  objectState: string;
  selectedDomains: number[];
  selectedSCompanies: number[];
  showObjectModal: boolean;
};

/**Начальное состояние */
export const initialState: State = {
  pageNumber: 1,
  filter: "",
  pageSize: 10,
  objectState: "",
  selectedDomains: [],
  selectedSCompanies: [],
  showObjectModal: false,
};

/**Данные для редуцера */
type Payload = {
  intValue?: number;
  strValue?: string;
  arrValue?: number[];
};

type Action = {
  type: actionType;
  payload: number | boolean | string | number[];
};

export enum actionType {
  CHANGE_PAGE = 1,
  CHANGE_FILTER = 2,
  CHANGE_PAGE_SIZE = 3,
  CHANGE_OBJECT_STATE = 4,
  CHANGE_BY_DOMAINS = 5,
  CHANGE_BY_SCOMPANIES = 6,
  SHOW_MODAL = 7,
  CLEAR_FILTERS = 8,
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionType.CHANGE_PAGE:
      return {
        ...state,
        pageNumber: action.payload as number,
      };
    case actionType.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload as string,
        pageNumber: 1,
      };
    case actionType.CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageNumber: 1,
        pageSize: _pageSizes.find((size) => size.Id == (action.payload as number))?.value,
      };
    case actionType.CHANGE_OBJECT_STATE:
      return {
        ...state,
        objectState: _objectStates.find((oState) => oState.Id == (action.payload as number))?.value,
        pageNumber: 1,
      };
    case actionType.CHANGE_BY_DOMAINS:
      return {
        ...state,
        selectedDomains: action.payload as number[],
        pageNumber: 1,
      };
    case actionType.CHANGE_BY_SCOMPANIES:
      return {
        ...state,
        selectedSCompanies: action.payload as number[],
        pageNumber: 1,
      };
    case actionType.SHOW_MODAL:
      return {
        ...state,
        showObjectModal: action.payload as boolean,
      };
    case actionType.CLEAR_FILTERS:
      return initialState
    default:
      throw new Error();
  }
};
