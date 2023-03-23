import {
  GET_ALL_DOGS,
  GET_DOG_BY_NAME,
  LOADER,
  MANAGE_ERROR,
  GET_DOG_DETAIL,
  GET_ALL_TEMPERAMENTS,
  FILTER_BY_TEMPERAMENTS,
  FILTER_BY_ORIGIN,
  FILTER_BY_NAME,
  FILTER_BY_WEIGHT,
  CLEAR_POSTED_DOG,
  POST_DOG,
} from "./types";

const initialState = {
  filteredDogs: [],
  allDogs: [],
  dogDetail: {},
  postedDog: {},
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
        filteredDogs: [],
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
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
        loader: false,
        error: action.payload.message,
      };
    case FILTER_BY_TEMPERAMENTS:
      const tempFiltered =
        action.payload === "All"
          ? state.allDogs
          : state.allDogs.filter((e) =>
              e.temperament?.includes(action.payload)
            );
      return {
        ...state,
        filteredDogs: tempFiltered,
        loader: false,
        error: action.payload.message,
      };
    case FILTER_BY_ORIGIN:
      const origFiltered =
        action.payload === "All"
          ? state.allDogs
          : action.payload === "Api"
          ? state.allDogs.filter((e) => e.createdInDB === true)
          : state.allDogs.filter((e) => e.createdInDB === false);
      return {
        ...state,
        filteredDogs: origFiltered,
        loader: false,
        error: action.payload.message,
      };
    case FILTER_BY_NAME:
      let stateDog = state.allDogs;
      let sorted =
        action.payload === "asc"
          ? stateDog.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : stateDog.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              return 0;
            });

      return {
        ...state,
        filteredDogs: [...sorted],
        loader: false,
        error: action.payload.message,
      };
    case FILTER_BY_WEIGHT:
      let stateDog_2 = state.allDogs;
      let sorted_2 =
        action.payload === "min"
          ? stateDog_2.sort(
              (a, b) =>
                (a.weight[0] + a.weight[1]) / 2 -
                (b.weight[0] + b.weight[1]) / 2
            )
          : stateDog_2
              .sort(
                (a, b) =>
                  (a.weight[0] + a.weight[1]) / 2 -
                  (b.weight[0] + b.weight[1]) / 2
              )
              .reverse();
      return {
        ...state,
        filteredDogs: [...sorted_2],
        loader: false,
        error: action.payload.message,
      };
    case POST_DOG:
      return {
        ...state,
        postedDog: action.payload
      }
    case LOADER:
      return {
        ...state,
        loader: action.payload,
      };
    case MANAGE_ERROR:
      return {
        ...state,
        allDogs: [],
        loader: false,
        error: action.payload,
      };
    case CLEAR_POSTED_DOG:
      return{
        ...state,
        postedDog:{}
      }
    default:
      return {
        ...state,
      };
  }
}
