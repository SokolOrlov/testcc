import { ObjectsResult, ObjectState, Post } from "../API/AllObjectsService";
import { getPageCount } from "../utils/pages";

interface s {
  posts: Post[];
  states: ObjectState[];
  stateNumber: number;
  pageLimit: number;
  pageNumber: number;
  totalPages: number;
  filter: string;
}

export const initialState: s = {
  posts: [],
  states: [],
  stateNumber: 0,
  pageLimit: 10,
  totalPages: 0,
  pageNumber: 1,
  filter: "",
};

interface payload{
  num?:number,
  str?:string,
  o?:ObjectsResult,
  s?:ObjectState[]
}

export const reducer = (state: s, action: { type: string; payload: payload}): s => {
  switch (action.type) {
    case "init":{
      return {
        ...state, 
        posts: action.payload.o.data, 
        states: action.payload.s,
        totalPages: getPageCount(action.payload.o.total, state.pageLimit) 
      }
    }
    case "change_page":{
      return {...state, 
        pageNumber:action.payload.num,
        posts: action.payload.o.data
      }
    }
    case "change_filter":{
      return {
        ...state, 
        filter:action.payload.str, 
        pageNumber:1,
        posts: action.payload.o.data,
        totalPages: getPageCount(action.payload.o.total, state.pageLimit)
      }
    }
    case "change_limit":
      break;
    case "change_state":{
      return {
        ...state, 
        stateNumber:action.payload.num, 
        pageNumber:1,
        posts: action.payload.o.data,
        totalPages: getPageCount(action.payload.o.total, state.pageLimit)
      }
    }
    default:
      return state;
      break;
  }
};
