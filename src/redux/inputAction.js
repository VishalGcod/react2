export const ADD_INPUT = "ADD_INPUT";
export const ARRAY_DATA = "ARRAY_DATA";
export const EDIT_ARRAY = "EDIT_ARRAY";
export const UPDATE_DATA = "UPDATE_DATA";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const addToArr = (arrobj) => {
  return {
    type: ARRAY_DATA,
    payload: arrobj,
  };
};
export const editToArr = (editarrobj) => {
  return {
    type: EDIT_ARRAY,
    payload: editarrobj,
  };
};

export const updateData = (updata) => {
  return {
    type: UPDATE_DATA,
    payload: updata,
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};
export const fetchUserFailure = (fail) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: fail,
  };
};
