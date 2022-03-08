import React, {useEffect, useState} from 'react';
import {SafeAreaView, Dimensions, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('screen').width;

const CurrentDay = ({route}) => {
  const {url} = route.params;
  // console.log('URL', url);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <FastImage
          style={{width: width, height: 300}}
          source={{
            uri: url,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
    </SafeAreaView>
  );
};

export default CurrentDay;
