import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import styles from './styles';


class QuizCover extends Component {
  
  render () {
  
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    
    return (
      <View>
        <Text style={styles.DeckMainStyle.appName}>{params.deckTitle}</Text>
        
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => navigate(
            'QuizDisplay',
            { deckData: params.deckData, questionIndex: 0, score: 0 }
          )}
          title="Start Memory!" />
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => navigate(
            'CardEdit',
            { deckData: params.deckData, lastId: params.lastId }
          )}
          title="Add card for this deck" />
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => navigate(
            'DeckMain',
            { operation: 'add' }
          )}
          title="Back" />
      </View>
    );
  }
}

export default QuizCover;