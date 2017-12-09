import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import DeckMain from './components/DeckMain';
import DeckEdit from './components/DeckEdit';
import CardEdit from './components/CardEdit';
import QuizCover from './components/QuizCover';
import QuizDisplay from './components/QuizDisplay';
import QuizScore from './components/QuizScore';
import { setLocalNotification } from './utils/notification';

import styles from './components/basicStyles';


const Navigator = StackNavigator({
  DeckMain: {
    screen: DeckMain,
    navigationOptions: {
      header: null,
    },
  },
  DeckEdit: {
    screen: DeckEdit,
    navigationOptions: {
      header: null,
    },
  },
  CardEdit: {
    screen: CardEdit,
    navigationOptions: {
      header: null,
    },
  },
  QuizCover: {
    screen: QuizCover,
    navigationOptions: {
      header: null,
    },
  },
  QuizDisplay: {
    screen: QuizDisplay,
    navigationOptions: {
      header: null,
    },
  },
  QuizScore: {
    screen: QuizScore,
    navigationOptions: {
      header: null,
    },
  },
});

class App extends React.Component {
  
  state = {
    database: {}
  };
  
  componentDidMount() {
    setLocalNotification();
  }
  
  render() {
    return (
      <View style={styles.viewPort}>
        <View style={styles.statusBar}>
          <StatusBar />
        </View>
        <Navigator />
      </View>
    )
  }
}

export default App;
