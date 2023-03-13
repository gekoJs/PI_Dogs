import {
  GET_ALL_DOGS,
  LOADER,
  GET_DOG_BY_NAME,
  GET_DOG_DETAIL,
  MANAGE_ERROR,
  GET_ALL_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  FILTER_BY_ORIGIN,
  FILTER_BY_NAME,
  FILTER_BY_WEIGHT,
  //   CLEAR_DETAIL,
    POST_DOG,
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
      type: MANAGE_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const getDogByName = (name) => async (dispatch) => {
  try {
    await axios.get(`http://localhost:3001/dogs?name=${name}`).then((resp) => {
      dispatch({
        type: GET_DOG_BY_NAME,
        payload: resp.data,
      });
    });
  } catch (error) {
    dispatch({
      type: MANAGE_ERROR,
      payload: error.response.data.message,
    });
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
      type: MANAGE_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const getAllTemperaments = () => async (dispatch) => {
  try {
    await axios.get("http://localhost:3001/temperaments").then((resp) => {
      dispatch({
        type: GET_ALL_TEMPERAMENTS,
        payload: resp.data,
      });
    });
  } catch (error) {
    dispatch({
      type: MANAGE_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const filterByTemperament = (payload) => {
  return {
    type: FILTER_BY_TEMPERAMENTS,
    payload,
  };
};

export const filterByOrigin = (payload) => {
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  };
};

export const filterByName = (payload) => {
  return {
    type: FILTER_BY_NAME,
    payload,
  };
};

export function filterByWeight(payload) {
  return {
    type: FILTER_BY_WEIGHT,
    payload,
  };
}

export const postDog = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:3001/dogs", data).then(resp=>{
      dispatch({
        type:POST_DOG,
        payload: resp.data
      })
    });
  } catch (error) {
    dispatch({
      type: MANAGE_ERROR,
      payload: error.response.data.message,
    });
  }
};

export const loaderHandler = (payload) => {
  return {
    type: LOADER,
    payload,
  };
};

export const manageErr = (payload) => {
  return{
    type: MANAGE_ERROR,
    payload
  }
}