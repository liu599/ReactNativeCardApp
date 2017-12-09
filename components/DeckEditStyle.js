import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');
const margin = 20;
const borderRadius = 10;

export default StyleSheet.create({
  textInput: {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    height: 40,
    marginRight: margin * 2,
    marginLeft: margin * 2,
    marginBottom: margin / 2,
    marginTop: margin / 2,
    borderWidth: 1,
    borderColor: '#c62f2f'
  },
  button: {
    height: 40,
    marginBottom: margin,
    marginTop: margin,
  }
});