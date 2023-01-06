
import { ObjectState, PageSize, ObjectsResult } from "../Services/AllObjectsService";

export interface ObjectPageState {
  states: ObjectState[];
  pageSizes: PageSize[];
  stateId: number;
  pageSizeId: number;
  pageNumber: number;
  filter: string;
}

export const initialState: ObjectPageState = {
  states: [],
  pageSizes: [],
  stateId: 1,
  pageSizeId: 1,
  pageNumber: 1,
  filter: "",
};

interface payload {
  intValue?: number;
  strValue?: string;
  objectsOnPage?: ObjectsResult;
  objectStates?: ObjectState[];
  objectLimits?: PageSize[];
}

export const reducer = (state: ObjectPageState, action: { type: string; payload: payload }): ObjectPageState => {
  switch (action.type) {
    case "init":
      return {
       ...state,
        states: action.payload.objectStates,
        pageSizes: action.payload.objectLimits
      };
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
        pageNumber: 1
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