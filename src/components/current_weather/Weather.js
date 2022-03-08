import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Geolocation from '@react-native-community/geolocation';
//import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  ScrollView,
  Button,
  TextInput,
  Appearance,
} from 'react-native';
import {
  getCityWeather,
  getWeather,
  saveLocalCoords,
} from '../../actions/actions';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const getContainerStyle = (temp, styleName) => {
  const appThemeLight = {
    container: styles.container,
    text: styles.text,
    cityName: styles.cityName,
    input: styles.input,
    button: styles.buttonContainer,
    buttonText: styles.buttonText,
    textTemp: styles.textTemp,
    descrContainer: styles.descrContainer,
  };

  const appThemeDark = {
    container: styles.containerDark,
    text: styles.textDark,
    cityName: styles.cityNameDark,
    input: styles.inputDark,
    button: styles.buttonContainerDark,
    buttonText: styles.buttonTextDark,
    textTemp: styles.textTempDark,
    descrContainer: styles.descrContainerDark,
  };

  if (temp > 0) {
    return appThemeLight[styleName];
  }
  return appThemeDark[styleName];
};

//const

const Weather = () => {
  const [cityText, onChangeText] = useState('');
  const weatherData = useSelector(state => state.weather);
  const dispatch = useDispatch();
  const data = weatherData.weather;
  console.log('GEN DATA', weatherData);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      dispatch(saveLocalCoords(info.coords.latitude, info.coords.longitude));
      dispatch(getWeather(info.coords.latitude, info.coords.longitude));
    });
  }, []);

  const {clouds, name, visibility, weather, main, coord} = data;

  if (!main) return null;
  const {temp, feels_like, humidity, pressure, temp_max, temp_min} = main;

  const iconCode = weather[0].icon;
  const iconurl = 'https://openweathermap.org/img/w/' + iconCode + '.png';

  return (
    <View style={getContainerStyle(temp, 'container')}>
      <View>
        <TextInput
          style={getContainerStyle(temp, 'input')}
          onChangeText={onChangeText}
          value={cityText}
        />
      </View>
      <View style={{margin: 10}}>
        <TouchableOpacity
          style={getContainerStyle(temp, 'button')}
          onPress={() => {
            dispatch(getCityWeather(cityText));
            //dispatch(saveLocalCoords(lat, lon));
          }}>
          <Text style={getContainerStyle(temp, 'buttonText')}>
            Search your city
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tempView}>
        <FastImage
          style={{width: 100, height: 100}}
          source={{
            uri: iconurl,
          }}
        />
        <View style={styles.textTempView}>
          <Text style={getContainerStyle(temp, 'textTemp')}>
            {Math.floor(temp) + ' ℃'}
          </Text>
        </View>
      </View>
      <View style={getContainerStyle(temp, 'descrContainer')}>
        <Text style={getContainerStyle(temp, 'cityName')}> {name}</Text>
        <Text style={getContainerStyle(temp, 'text')}>
          {' '}
          Visibility: {visibility}
        </Text>
        <Text style={getContainerStyle(temp, 'text')}>
          {' '}
          Clouds: {clouds.all}
        </Text>
        <Text style={getContainerStyle(temp, 'text')}>
          {' '}
          Feels Like: {Math.floor(feels_like) + '℃'}
        </Text>
        <Text style={getContainerStyle(temp, 'text')}>
          {' '}
          Max Temp: {Math.floor(temp_max) + '℃'}
        </Text>
        <Text style={getContainerStyle(temp, 'text')}>
          {' '}
          Min Temp: {Math.floor(temp_min) + '℃'}
        </Text>
        <Text style={getContainerStyle(temp, 'text')}>
          {' '}
          Humidity: {humidity}
        </Text>
        <Text style={getContainerStyle(temp, 'text')}>
          {' '}
          Pressure: {pressure}
        </Text>
      </View>
    </View>
  );
};

export default Weather;
