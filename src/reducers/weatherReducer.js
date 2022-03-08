import {
  GET_WEATHER,
  GET_WEATHER_FAILED,
  GET_WEATHER_RECEIVED,
  GET_WEATHER_FORECAST_RECEIVED,
  GET_WEATHER_FOR_CITY_RECEIVED,
  SAVE_COORDS,
} from '../config/Const';

const defaultState = {
  weather: [],
  forecast: [],
  cityForecast: [],
  loading: false,
  errorMessage: undefined,
  lat: '',
  long: '',
  //theme: 'light',
};

export const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        loading: true,
      };
    case GET_WEATHER_RECEIVED:
      const {lat, lon} = action.payload.coord;
      return {
        ...state,
        weather: action.payload,
        loading: false,
        lat,
        lon,
      };
    case GET_WEATHER_FORECAST_RECEIVED:
      return {
        ...state,
        forecast: action.payload,
        loading: false,
      };
    case GET_WEATHER_FOR_CITY_RECEIVED:
      return {
        ...state,
        cityForecast: action.payload,
        loading: false,
      };
    case SAVE_COORDS:
      return {
        ...state,
        lat: action.lat,
        long: action.long,
      };
    case GET_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
