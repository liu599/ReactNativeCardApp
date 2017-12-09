import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  statusBar: {
    backgroundColor: '#000',
    height: Constants.statusBarHeight,
  },
  viewPort: {
    flex: 1,
    backgroundColor: '#44f',
  },
});