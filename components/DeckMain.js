import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import * as Nekohand from '../utils/api';
import styles from './styles';

class DeskMain extends React.Component {
  
  state = {
    database: [{
      title: '',
      questions: [{
        question: '',
        answer: '',
      }],
    }],
  };

  componentDidMount() {
    if (!this.props.navigation.state.params) {
      Nekohand.setItem().then((database) => {
        this.setState({ database });
      });
    } else {
      Nekohand.fetchDecks().then((res) => {
         const database = JSON.parse(res);
         this.setState({ database });
      });
    }
  }
  
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.DeckMainStyle.container}
        onPress={() => this.props.navigation.navigate(
                          'QuizCover',
                          { deckTitle: item.title, deckData: item, lastId: item.questions.length }
                        )}
      >
        <Text style={styles.DeckMainStyle.title}>{item.title}</Text>
        <Text style={styles.DeckMainStyle.sub}>{item.questions.length} cards</Text>
      </TouchableOpacity>
    )
  };
  
  render() {
  
    const { navigate } = this.props.navigation;
    
    return (
      <View>
        <Text style={styles.DeckMainStyle.appName}>Memory App</Text>
        <FlatList
          data={this.state.database}
          renderItem={({ item }) => this.renderItem({ item })}
          keyExtractor={(item, index) => index}
        />
        <TouchableOpacity
          style={styles.DeckMainStyle.container}
          onPress={() => navigate(
            'DeckEdit'
          )}
        >
          <Text style={styles.DeckMainStyle.title}>Add a new deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}

export default DeskMain;
