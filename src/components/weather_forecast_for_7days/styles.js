import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: '#F3F3F4',
  },
  generalContainerDark: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F3F4',
  },
  containerDark: {
    flex: 1,
    backgroundColor: 'black',
  },
  currentContainer: {
    flex: 0,
    backgroundColor: '#D5ECEA',
    borderRadius: 20,
    margin: 5,
  },
  currentContainerDark: {
    flex: 0,
    backgroundColor: '#1A1C7D',
    borderRadius: 20,
    margin: 5,
  },
  cellContainer: {
    height: 70,
    margin: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 30,
  },
  cellContainerDark: {
    height: 70,
    margin: 5,
    flexDirection: 'row',
    backgroundColor: '#1A1C7D',
    borderRadius: 30,
  },
  image: {
    marginLeft: 10,
    width: 50,
    height: 50,
  },
  imageView: {
    justifyContent: 'center',
  },
  timeView: {
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10,
  },
  timeTextDark: {
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10,
    color: 'white',
  },
  tempDayNight: {
    flex: 1,
    justifyContent: 'center',
  },
  tempDayNightText: {
    right: 0,
    textAlign: 'right',
    margin: 20,
    fontSize: 18,
  },
  tempDayNightTextDark: {
    right: 0,
    textAlign: 'right',
    margin: 20,
    fontSize: 18,
    color: 'white',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cityNameDark: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  cityView: {
    width: '100%',
    alignItems: 'center',
  },
  currTempView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  currTempTextView: {
    justifyContent: 'center',
    //backgroundColor: 'green'
  },
  currTempText: {
    fontSize: 24,
    textAlign: 'center',
  },
  currTempTextDark: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  description: {
    width: '100%',
    flexDirection: 'row',
    margin: 30,
  },
  descriptionText: {
    fontSize: 20,
  },
  descriptionTextDark: {
    fontSize: 20,
    color: 'white',
  },
  generalText: {
    fontSize: 18,
    alignItems: 'center',
  },
  generalTextDark: {
    fontSize: 18,
    alignItems: 'center',
    color: 'white',
  },
  descriptionView: {
    width: '100%',
    alignItems: 'center',
  },
  humidity: {
    width: '50%',
    justifyContent: 'center',
  },
  pressure: {
    width: '50%',
    justifyContent: 'center',
  },
});
