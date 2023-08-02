import { ADD_INPUT, ARRAY_DATA, EDIT_ARRAY, UPDATE_DATA } from "./inputAction";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./inputAction";

const initialState2 = {
  arr: [],
};

export const objReducer = (state = initialState2, action) => {
  switch (action.type) {
    case ARRAY_DATA:
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    case EDIT_ARRAY:
      return {
        ...state,
        arr: action.payload,
      };
    case UPDATE_DATA:
      return {
        ...state,
        arr: action.payload,
      };
    default:
      return state;
  }
};

const initialStateFetch = {
  loading: false,
  users: [],
  error: "",
};

export const FetchReducer = (state = initialStateFetch, action) => {
  
};
