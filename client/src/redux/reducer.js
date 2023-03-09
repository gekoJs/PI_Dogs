import {
  GET_ALL_DOGS,
  GET_DOG_BY_NAME,
  LOADER,
  MANAGE_ERROR,
  GET_DOG_DETAIL,

  //   GET_ALL_TEMPERAMENTS,
  //   FILTER_BY_NAME,
  //   FILTER_BY_TEMPERAMENTS,
  //   FILTER_BY_WEIGHT,
  //   FILTER_CREATED_DOG,
  //   CLEAR_DETAIL,
  //   POST_DOG,
  //   DELETE_DOG,
} from "./types";

const initialState = {
  allDogs: [],
  dogs: [],
  dogDetail: {},
  temperaments: [],
  loader: false,
  error: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        loader: false,
        error: action.payload.message,
      };
    case GET_DOG_BY_NAME:
      return {
        ...state,
        allDogs: action.payload,
        loader: false,
        error: action.payload.message,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
        loader: false,
        error: action.payload.message,
      };
    case LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case MANAGE_ERROR:
      return {
        ...state,
        allDogs: [],
        loader:false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
