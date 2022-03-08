import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F4',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#06084C',
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
  },
  textDark: {
    fontSize: 20,
    marginTop: 10,
    color: 'white',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  cityNameDark: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  input: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
  },
  inputDark: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    backgroundColor: '#1E2194',
  },
  descrContainer: {
    alignSelf: 'center',
  },
  descrContainerDark: {
    alignSelf: 'center',
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    marginRight: 60,
    marginLeft: 60,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonContainerDark: {
    elevation: 8,
    backgroundColor: '#6BE2F2',
    borderRadius: 20,
    marginRight: 60,
    marginLeft: 60,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonTextDark: {
    fontSize: 18,
    color: '#136F79',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  tempView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tempViewDark: {
    flexDirection: 'row',
  },
  textTempView: {
    justifyContent: 'center',
  },
  textTemp: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textTempDark: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});
