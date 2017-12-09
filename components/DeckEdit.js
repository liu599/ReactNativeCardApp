import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from './styles';

import * as Nekohand from '../utils/api';

class DeckEdit extends Component {
  
  state = {
    input: '',
  };
  
  nextPage = (navigate) => {
    Nekohand.fetchDeckCurrentIndex().then(id => {
      navigate(
        'CardEdit',
        {
          title: this.state.input,
          id,
        }
      )
    });
    
  };
  
  render () {
    
    const { navigate } = this.props.navigation;
    
    return (
      <View>
        <Text
          style={styles.DeckMainStyle.appName}
        >What is your title of deck</Text>
        <TextInput placeholder='Deck Name'
                   style={styles.DeckEditStyle.textInput}
                   value={this.state.input}
                   onChangeText={(input) => { this.setState({ input }) }}
        />
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => {this.nextPage(navigate)}}
          title="OK & Next Step" />
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => navigate(
            'DeckMain'
          )}
          title="Cancel" />
      </View>
    )
  }
  
}

export default DeckEdit;