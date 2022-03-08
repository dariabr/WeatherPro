import {
  GET_WEATHER,
  GET_WEATHER_FAILED,
  GET_WEATHER_RECEIVED,
  SAVE_COORDS,
  API_KEY,
  BASE_URL,
  GET_WEATHER_FORECAST_RECEIVED,
  GET_WEATHER_FOR_CITY_RECEIVED,
} from '../config/Const';

export const getWeatherStart = () => ({
  type: GET_WEATHER,
});

export const getWeatherSuccess = data => ({
  type: GET_WEATHER_RECEIVED,
  payload: data,
});

export const getWeatherForecastSuccess = data => ({
  type: GET_WEATHER_FORECAST_RECEIVED,
  payload: data,
});

export const getWeatherForCitySuccess = data => ({
  type: GET_WEATHER_FOR_CITY_RECEIVED,
  payload: data,
});

export const getWeatherFailure = error => ({
  type: GET_WEATHER_FAILED,
  payload: error,
});

export const saveLocalCoords = (lat, lon) => ({
  type: SAVE_COORDS,
  lat: lat,
  long: lon,
});

const options = {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
};

const fetchWeather = (url, dispatch, action) => {
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      dispatch(action(data));
    })
    .catch(error => {
      console.log('ERROR', error.message);
      dispatch(getWeatherFailure(error));
    });
};

export const getCityWeather = city => dispatch => {
  dispatch(getWeatherStart());
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetchWeather(url, dispatch, getWeatherSuccess);
};

export const getWeather = (lat, long, period) => dispatch => {
  dispatch(getWeatherStart());
  //data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  if (period) {
    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${period}&appid=${API_KEY}&units=metric`;
    fetchWeather(url, dispatch, getWeatherForecastSuccess);
    return;
  }
  fetchWeather(url, dispatch, getWeatherSuccess);
};
