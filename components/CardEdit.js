import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import styles from './styles';
import * as Nekohand from '../utils/api';

class CardEdit extends Component {
  
  state = {
    question: '',
    answer: '',
    data: '',
  };
  
  navigateToMain = (navigate) => {
    navigate(
      'DeckMain',
      {
        index: 0,
      }
    )
  };
  
  addCard = (navigate) => {
    let id;
    if (this.props.navigation.state.params.lastId) {
      console.log('Add Card To Existing');
      id = this.props.navigation.state.params.lastId;
      Nekohand.fetchDecks().then(res => {
        let data = JSON.parse(res);
        data[this.props.navigation.state.params.deckData.id].questions.push({
          id,
          pid: this.props.navigation.state.params.deckData.id,
          question: this.state.question,
          answer: this.state.answer,
        });
        return data;
      }).then((data) => {
        return Nekohand.writeDatabaseForQuestion(data, this.props.navigation.state.params.deckData.id);
      }).then(() => {
        this.navigateToMain(navigate);
      });
    } else {
      id = this.props.navigation.state.params.id + 1;
      Nekohand.writeDatabase({
        id,
        title: this.props.navigation.state.params.title,
        questions: [{
          id: 0,
          pid: id,
          question: this.state.question,
          answer: this.state.answer,
        }],
      }).then(() => {
        this.navigateToMain(navigate);
      });
    }
    
  };
  
  
  render () {
  
    const { navigate } = this.props.navigation;
    
    return (
      <View>
        <Text style={styles.DeckMainStyle.appName}>Add a question for your deck!</Text>
        <TextInput placeholder='Card Question'
                   style={styles.DeckEditStyle.textInput}
                   value={this.state.question}
                   onChangeText={(question) => { this.setState({ question }) }}
        />
        <TextInput placeholder='Card Answer'
                   style={styles.DeckEditStyle.textInput}
                   value={this.state.answer}
                   onChangeText={(answer) => { this.setState({ answer }) }}
        />
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => {
            this.addCard(navigate);
          }}
          title="OK" />
        <Button
          style={styles.DeckEditStyle.button}
          onPress={() => {
            this.navigateToMain(navigate);
          }}
          title="Cancel" />
      </View>
    );
  };
}

export default CardEdit;