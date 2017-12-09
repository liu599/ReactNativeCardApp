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
            'DeckMain'
          )}
          title="Back" />
      </View>
    );
  }
}

export default QuizScore;