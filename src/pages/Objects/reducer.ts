import { _objectStates, _pageSizes } from "../../data";

/**Состояние страницы "Все объекты" */
export interface ObjectPageState {  
  pageNumber: number;
  filter: string;
  pageSize: number;
  objectState: string
}

/**Начальное состояние */
export const initialState: ObjectPageState = {   
  pageNumber: 1,
  filter: "",
  pageSize: 10,
  objectState: ""
};

/**Данные для редуцера */
interface payload {
  intValue?: number;
  strValue?: string;
}

export enum actionType {
  CHANGE_PAGE = 1,
  CHANGE_FILTER = 2,
  CHANGE_PAGESIZE = 3,
  CHANGE_OBJECTSTATE = 4

}

export const reducer = (state: ObjectPageState, action: { type: actionType; payload: payload }): ObjectPageState => {
  console.log(state, action);
  
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
    case actionType.CHANGE_PAGESIZE:
      return {
        ...state, 
        pageNumber: 1,
        pageSize: _pageSizes.find((size) => size.Id == action.payload.intValue)?.value
      };
    case actionType.CHANGE_OBJECTSTATE:
      return {
        ...state,
        objectState: _objectStates.find((oState) => oState.Id == action.payload.intValue)?.value,
        pageNumber: 1
      };
    default:
      throw new Error();
  }
};