
import { Post, ObjectState, PageSize, ObjectsResult } from "../Services/AllObjectsService";
import { getPageCount } from "../utils/pages";

export interface ObjectPageState {
  //posts: Post[];
  states: ObjectState[];
  pageSizes: PageSize[];
  stateId: number;
  pageSizeId: number;
  pageNumber: number;
  totalPages: number;
  filter: string;
}

export const initialState: ObjectPageState = {
  //posts: [],
  states: [],
  pageSizes: [],
  stateId: 1,
  pageSizeId: 1,
  totalPages: 0,
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
       // posts: action.payload.objectsOnPage.data,
        states: action.payload.objectStates,
        pageSizes: action.payload.objectLimits,
       // totalPages: getPageCount(action.payload.objectsOnPage.total, action.payload.objectLimits.find((l) => l.id == 1).value)
      };
    case "change_page":
      return {
        ...state,
        pageNumber: action.payload.intValue,
       // posts: action.payload.objectsOnPage.data,
      };
    case "change_filter":
      return {
        ...state,
        filter: action.payload.strValue,
        pageNumber: 1,
       // posts: action.payload.objectsOnPage.data,
      //  totalPages: getPageCount(action.payload.objectsOnPage.total, state.pageSizes.find((l) => l.id == state.pageSizeId).value),
      };
    case "change_limit":
      return {
        ...state,
        pageSizeId: action.payload.intValue,
        pageNumber: 1,
    //    posts: action.payload.objectsOnPage.data,
      //  totalPages: getPageCount(action.payload.objectsOnPage.total, state.pageSizes.find((l) => l.id == action.payload.intValue).value),
      };
    case "change_state":
      return {
        ...state,
        stateId: action.payload.intValue,
        pageNumber: 1,
      //  posts: action.payload.objectsOnPage.data,
      //  totalPages: getPageCount(action.payload.objectsOnPage.total, state.pageSizes.find((l) => l.id == state.pageSizeId).value),
      };
    default:
      throw new Error();
  }
};