import {PageSize,  ObjectsResult,  ObjectState,  Post,} from "../API/AllObjectsService";
import { getPageCount } from "../utils/pages";

export interface ObjectPageState {
  posts: Post[];
  states: ObjectState[];
  pageSizes: PageSize[];
  stateId: number;
  pageSizeId: number;
  pageNumber: number;
  totalPages: number;
  filter: string;
}

export const initialState: ObjectPageState = {
  posts: [],
  states: [],
  pageSizes: [],
  stateId: 1,
  pageSizeId: 1,
  totalPages: 0,
  pageNumber: 1,
  filter: "",
};

interface payload {
  num?: number;
  str?: string;
  o?: ObjectsResult;
  s?: ObjectState[];
  l?: PageSize[];
}

export const reducer = (state: ObjectPageState, action: { type: string; payload: payload }): ObjectPageState => {
  switch (action.type) {
    case "init":
      return {
        ...state,
        posts: action.payload.o.data,
        states: action.payload.s,
        pageSizes: action.payload.l,
        totalPages: getPageCount(action.payload.o.total, action.payload.l.find((l) => l.id == 1).value),
      };
    case "change_page":
      return {
        ...state,
        pageNumber: action.payload.num,
        posts: action.payload.o.data,
      };
    case "change_filter":
      return {
        ...state,
        filter: action.payload.str,
        pageNumber: 1,
        posts: action.payload.o.data,
        totalPages: getPageCount(action.payload.o.total, state.pageSizes.find((l) => l.id == state.pageSizeId).value),
      };
    case "change_limit":
      return {
        ...state,
        pageSizeId: action.payload.num,
        pageNumber: 1,
        posts: action.payload.o.data,
        totalPages: getPageCount(action.payload.o.total, state.pageSizes.find((l) => l.id == action.payload.num).value),
      };
    case "change_state":
      return {
        ...state,
        stateId: action.payload.num,
        pageNumber: 1,
        posts: action.payload.o.data,
        totalPages: getPageCount(action.payload.o.total, state.pageSizes.find((l) => l.id == state.pageSizeId).value),
      };
    default:
      throw new Error();
  }
};