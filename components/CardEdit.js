import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

import styles from './styles';
import * as Nekohand from '../utils/api';

class CardEdit extends Component {
  
  state = {
    question: '',
    answer: '',
    data: '',
    returnId: '',
  };
  
  navigateToDisplay = (navigate) => {
    navigate(
      'QuizCover',
      {
        deckData: this.state.data[this.state.returnId],
      }
    )
  };
  
  addCard = (navigate) => {
    let id;
    if (this.props.navigation.state.params.lastId) {
      id = this.props.navigation.state.params.lastId;
      Nekohand.writeQuestion({
          id: id + 1,
          pid: this.props.navigation.state.params.deckData.id,
          question: this.state.question,
          answer: this.state.answer,
        }, this.props.navigation.state.params.deckData.id).then(() => {
          Nekohand.fetchDecks().then(data => {
            this.setState({
              data: JSON.parse(data),
              returnId: this.props.navigation.state.params.deckData.id,
            })
          }).then(() => {
            this.navigateToDisplay(navigate);
          });
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
        Nekohand.fetchDecks().then(data => {
          this.setState({
            data: JSON.parse(data),
            returnId: id,
          })
        }).then(() => {
          this.navigateToDisplay(navigate);
        });
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