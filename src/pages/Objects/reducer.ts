import { ObjectState, PageSize } from "./types";

/**Состояние страницы "Все объекты" */
export interface ObjectPageState {
  states: ObjectState[];
  pageSizes: PageSize[];
  stateId: number;
  pageSizeId: number;
  pageNumber: number;
  filter: string;
  pageSize: number;
}

/**Начальное состояние */
export const initialState: ObjectPageState = {
  states: [],
  pageSizes: [],
  stateId: 1,
  pageSizeId: 1,
  pageNumber: 1,
  filter: "",
  pageSize: 1
};

/**Данные для редуцера */
interface payload {
  intValue?: number;
  strValue?: string;
}

export const reducer = (state: ObjectPageState, action: { type: string; payload: payload }): ObjectPageState => {
  switch (action.type) {
    case "change_page":
      return {
        ...state,
        pageNumber: action.payload.intValue
      };
    case "change_filter":
      return {
        ...state,
        filter: action.payload.strValue,
        pageNumber: 1
      };
    case "change_limit":
      return {
        ...state,
        pageSizeId: action.payload.intValue,
        pageNumber: 1,
        pageSize: state.pageSizes.find((l) => l.Id == action.payload.intValue)?.value
      };
    case "change_state":
      return {
        ...state,
        stateId: action.payload.intValue,
        pageNumber: 1
      };
    default:
      throw new Error();
  }
};