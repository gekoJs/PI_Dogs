import {
  GET_ALL_DOGS,
  LOADER,
  //   GET_ALL_TEMPERAMENTS,
  //   GET_DOG_DETAIL,
  //   GET_DOG_NAME,
  //   FILTER_BY_NAME,
  //   FILTER_BY_TEMPERAMENTS,
  //   FILTER_BY_WEIGHT,
  //   FILTER_CREATED_DOG,
  //   CLEAR_DETAIL,
  //   POST_DOG,
  //   DELETE_DOG,
} from "./types";

import axios from "axios";

export const getAllDogs = () => async (dispatch) => {
  try {
    await axios.get("http://localhost:3001/dogs").then((r) => {
      dispatch({
        type: GET_ALL_DOGS,
        payload: r.data,
      });
    });
  } catch (error) {
    return {
      message: `error getting dogs, ${error.message}`,
    };
  }
};

export const loaderHandler = (dispatch) => {
  return {
    type: LOADER,
    payload: dispatch,
  };
};
