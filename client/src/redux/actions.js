import {
  GET_ALL_DOGS,
  LOADER,
  GET_DOG_BY_NAME,
  GET_DOG_DETAIL,
  MANAGE_ERROR,
  //   GET_ALL_TEMPERAMENTS,
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
    await axios.get("http://localhost:3001/dogs").then((res) => {
      dispatch({
        type: GET_ALL_DOGS,
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type:MANAGE_ERROR,
      payload: error.response.data.message
    })
  }
};

export const getDogByName = (name) => async (dispatch) => {
  try{
    await axios.get(`http://localhost:3001/dogs?name=${name}`).then(resp =>{
      dispatch({
        type:GET_DOG_BY_NAME,
        payload: resp.data
      })
    })
  }
  catch(error){
    dispatch({
      type:MANAGE_ERROR,
      payload: error.response.data.message
    })
  }
};

export const getDogDetails = (id) => async (dispatch) => {
  try {
    await axios.get(`http://localhost:3001/dogs/${id}`).then((resp) => {
      dispatch({
        type: GET_DOG_DETAIL,
        payload: resp.data,
      });
    });
  } catch (error) {
    dispatch({
      type:MANAGE_ERROR,
      payload: error.response.data.message
    })}
};

export const loaderHandler = (dispatch) => {
  return {
    type: LOADER,
    payload: dispatch,
  };
};
