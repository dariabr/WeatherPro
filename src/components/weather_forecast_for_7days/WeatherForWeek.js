import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {IMAGE_URL} from '../../config/Const';
import FastImage from 'react-native-fast-image';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {getWeather} from '../../actions/actions';
import {timeConverter} from '../../config/Utils';
import styles from './styles';

const getContainerStyle = (temp, styleName) => {
  const appThemeLight = {
    container: styles.container,
    currentContainer: styles.currentContainer,
    cellContainer: styles.cellContainer,
    timeText: styles.timeText,
    tempDayNightText: styles.tempDayNightText,
    cityName: styles.cityName,
    currTempText: styles.currTempText,
    descriptionText: styles.descriptionText,
    generalText: styles.generalText,
    generalContainer: styles.generalContainer,
  };

  const appThemeDark = {
    container: styles.containerDark,
    currentContainer: styles.currentContainerDark,
    cellContainer: styles.cellContainerDark,
    timeText: styles.timeTextDark,
    tempDayNightText: styles.tempDayNightTextDark,
    cityName: styles.cityNameDark,
    currTempText: styles.currTempTextDark,
    descriptionText: styles.descriptionTextDark,
    generalText: styles.generalTextDark,
    generalContainer: styles.generalContainerDark,
  };

  if (temp > 0) {
    return appThemeLight[styleName];
  }
  return appThemeDark[styleName];
};

const renderItem = (data, navigation, t) => {
  const {item} = data;
  if (!item) return null;
  const {
    clouds,
    dt,
    feels_like,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
    weather,
  } = item;
  if (!temp) return null;
  const {day, eve, morn, night} = temp;
  console.log('77777ehfei', t);
  const weatherDecsr = weather[0];
  const {main, description, icon} = weatherDecsr;
  const iconurl = IMAGE_URL + icon + '.png';
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Current_Day', {
            url: iconurl,
          });
        }}>
        <View style={getContainerStyle(t, 'container')} key={dt}>
          <View style={getContainerStyle(t, 'cellContainer')}>
            <View style={styles.imageView}>
              <FastImage
                style={styles.image}
                source={{
                  uri: iconurl,
                }}
              />
            </View>
            <View style={styles.timeView}>
              <Text style={getContainerStyle(t, 'timeText')}>
                {timeConverter(dt)}
              </Text>
            </View>
            <View style={styles.tempDayNight}>
              <Text style={getContainerStyle(t, 'tempDayNightText')}>
                {Math.floor(day) + ' / ' + Math.floor(night) + '℃'}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const renderCurrent = (currentWeatherData, cityName) => {
  if (!currentWeatherData) return null;
  const {
    clouds,
    dt,
    feels_like,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
    visibility,
    weather,
  } = currentWeatherData;
  const {main, description, icon} = weather[0];
  const iconurl = IMAGE_URL + icon + '.png';
  console.log('temp', temp);
  return (
    <View style={getContainerStyle(temp, 'currentContainer')}>
      <View style={styles.cityView}>
        <Text style={getContainerStyle(temp, 'generalText')}>
          Few minutes later ....(60min)
        </Text>
        <Text style={getContainerStyle(temp, 'cityName')}>{cityName}</Text>
      </View>
      <View style={styles.currTempView}>
        <FastImage
          style={{width: 100, height: 100}}
          source={{
            uri: iconurl,
          }}
        />
        <View style={styles.currTempTextView}>
          <Text style={getContainerStyle(temp, 'currTempText')}>
            {Math.round(temp) + '℃'}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={getContainerStyle(temp, 'descriptionText')}>
          {description}
        </Text>
      </View>
      <View style={styles.description}>
        <View style={styles.humidity}>
          <Text style={getContainerStyle(temp, 'generalText')}>
            Humidity: {humidity}%
          </Text>
        </View>
        <View style={styles.pressure}>
          <Text style={getContainerStyle(temp, 'generalText')}>
            Pressure: {pressure}hPa
          </Text>
        </View>
      </View>
    </View>
  );
};

const WeatherForWeek = () => {
  const navigation = useNavigation();
  const weatherData = useSelector(state => state.weather);
  const dispatch = useDispatch();
  const forecast = weatherData.forecast;
  if (!forecast) return null;
  const weeklyWeatherData = forecast.daily;
  const currentWeatherData = forecast.current;

  useEffect(() => {
    dispatch(getWeather(weatherData.lat, weatherData.long, 'minutely'));
  }, [weatherData.lat, weatherData.long, dispatch]);

  if (!currentWeatherData) return null;
  const temp = currentWeatherData.temp;
  console.log('hdhdhdhdhhdhhhdd temp', temp);

  const cityName = weatherData.weather.name;

  return (
    <View style={getContainerStyle(temp, 'generalContainer')}>
      {renderCurrent(currentWeatherData, cityName)}
      <FlatList
        data={weeklyWeatherData}
        renderItem={item => {
          return renderItem(item, navigation, temp);
        }}
      />
    </View>
  );
};

export default WeatherForWeek;
