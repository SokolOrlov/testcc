import { _objectStates, _pageSizes } from "../../assets/data/data";

/**Состояние страницы "Все объекты" */
export interface ObjectPageState {  
  pageNumber: number;
  filter: string;
  pageSize: number;
  objectState: string;
  selectedDomains: number[];
  selectedSCompanies: number[];
}

/**Начальное состояние */
export const initialState: ObjectPageState = {   
  pageNumber: 1,
  filter: "",
  pageSize: 10,
  objectState: "",
  selectedDomains: [],
  selectedSCompanies: []
};

/**Данные для редуцера */
interface payload {
  intValue?: number;
  strValue?: string;
  arrValue?: number[]
}

export enum actionType {
  CHANGE_PAGE = 1,
  CHANGE_FILTER = 2,
  CHANGE_PAGE_SIZE = 3,
  CHANGE_OBJECT_STATE = 4,
  CHANGE_BY_DOMAINS = 5,
  CHANGE_BY_SCOMPANIES = 6

}

export const reducer = (state: ObjectPageState, action: { type: actionType; payload: payload }): ObjectPageState => {
  switch (action.type) {
    case actionType.CHANGE_PAGE:
      return {
        ...state,
        pageNumber: action.payload.intValue
      };
    case actionType.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload.strValue,
        pageNumber: 1
      };
    case actionType.CHANGE_PAGE_SIZE:
      return {
        ...state, 
        pageNumber: 1,
        pageSize: _pageSizes.find((size) => size.Id == action.payload.intValue)?.value
      };
    case actionType.CHANGE_OBJECT_STATE:
      return {
        ...state,
        objectState: _objectStates.find((oState) => oState.Id == action.payload.intValue)?.value,
        pageNumber: 1
      };
    case actionType.CHANGE_BY_DOMAINS:
      return {
        ...state,
        selectedDomains: action.payload.arrValue,
        pageNumber: 1
      };
    case actionType.CHANGE_BY_SCOMPANIES:
      return {
        ...state,
        selectedSCompanies: action.payload.arrValue,
        pageNumber: 1
      };
    default:
      throw new Error();
  }
};