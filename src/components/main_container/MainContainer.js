import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Weather from '../current_weather/';

import WeatherForWeek from '../weather_forecast_for_7days';
import CurrentDay from '../weather_forecast_for_7days/day';
import Settings from '../settings';
import dotIcon from './img/doticon.png';
import ThemeProvider from '../../config/ThemeManager';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RenderStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="7DaysForecast"
      component={WeatherForWeek}
      options={{
        title: 'Weekly Forecast',
        //headerShown: false,
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#181818',
      }}
    />
    <Stack.Screen
      name="Current_Day"
      component={CurrentDay}
      options={{
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTintColor: '#181818',
      }}
    />
  </Stack.Navigator>
);

const currentWeatherScreen = () => (
  <Tab.Screen
    name="Current_Weather"
    component={Weather}
    options={{
      title: 'Weather Now',
      tabBarIcon: ({focused}) => (
        <Image
          style={{width: 20, height: 20}}
          source={focused ? dotIcon : dotIcon}
          resizeMode="contain"
        />
      ),
    }}
  />
);

const weeklyWeather = () => (
  <Tab.Screen
    name="WeeklyWeather"
    component={RenderStack}
    options={{
      headerShown: false,
      //title: 'Weekly',
      tabBarIcon: ({focused}) => (
        <Image
          style={{width: 20, height: 20}}
          source={focused ? dotIcon : dotIcon}
          resizeMode="contain"
        />
      ),
    }}
  />
);

const settingsScreen = () => (
  <Tab.Screen
    name="Settings"
    component={Settings}
    options={{
      //headerShown: false,
      title: 'Settings',
      tabBarIcon: ({focused}) => (
        <Image
          style={{width: 20, height: 20}}
          source={focused ? dotIcon : dotIcon}
          resizeMode="contain"
        />
      ),
    }}
  />
);

const renderWeather = () => (
  <NavigationContainer>
    <Tab.Navigator>
      {currentWeatherScreen()}
      {weeklyWeather()}
      {settingsScreen()}
    </Tab.Navigator>
  </NavigationContainer>
);

const MainContainer = () => {
  return <View style={{flex: 1}}>{renderWeather()}</View>;
};

export default MainContainer;
