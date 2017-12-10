import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import styles from './styles';

class QuizScore extends Component {
  render () {
  
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    
    return (
      <View>
        <Text  style={styles.DeckMainStyle.appName}>Your Score: {params.score}</Text>
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => navigate(
            'QuizDisplay',
            { deckData: params.deckData, questionIndex: 0, score: 0 }
          )}
          title="Restart Quiz" />
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => navigate(
            'QuizCover',
            { deckData: params.deckData }
          )}
          title="Back to Deck" />
      </View>
    );
  }
}

export default QuizScore;