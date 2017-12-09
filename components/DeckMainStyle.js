import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');
const marginRight = 20;

export default StyleSheet.create({
  plusButton: {
    marginRight: marginRight,
  },
  appName: {
    marginTop: 80,
    marginBottom: 40,
    color: '#c62f2f',
    fontSize: 42,
    fontWeight: '700',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#fcfcfc',
    width: width - marginRight * 2,
    height: 100,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: marginRight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 5,
    fontSize: 20,
    textAlign: 'center',
    color: '#f01d4f',
  },
  sub: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    color: '#8d7edc',
  }
});