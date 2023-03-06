import {
  GET_ALL_DOGS,
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

const initialState = {
  allDogs: [],
  dogs: [],
  dogDetail: [],
  temperaments: [],
};
export default function rootReducer(state = initialState, action) {
    switch (action.type){
        case GET_ALL_DOGS:
            return{
                ...state,
                allDogs: action.payload
            }
        default:
            return{
                ...state,
            }
    }
}
