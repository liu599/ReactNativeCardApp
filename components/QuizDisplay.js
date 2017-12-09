import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Alert, Button, ScrollView } from 'react-native';
import FlipCard from 'react-native-flip-card'
import styles from './styles';

class QuizDisplay extends Component {
  render () {
  
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    const currentIndex = params.questionIndex;
    
    return (
      <View>
        <Text style={styles.DeckMainStyle.appName}>{params.deckData.questions[currentIndex].question}</Text>
        <FlipCard
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
        >
          <View>
            <Text style={styles.DeckMainStyle.title}>Click to see the answer</Text>
            <View style={styles.QuizDisplayStyle.view}>
              {[['Correct', 1], ['Incorrect', 0]].map((question, index) => {
                return currentIndex < params.deckData.questions.length - 1
                  ? <TouchableOpacity
                    style={styles.DeckMainStyle.container}
                      key = {index + 1}
                      onPress={() => navigate(
                        'QuizDisplay',
                        { deckData: params.deckData, questionIndex: currentIndex + 1, score: params.score + question[1] }
                      )}
                    >
                      <Text style={styles.DeckMainStyle.title}>{question[0]}</Text>
                    </TouchableOpacity>
                  : <TouchableOpacity
                      style={styles.DeckMainStyle.container}
                      key = {index + 1}
                      onPress={() => navigate(
                        'QuizScore',
                        { deckData: params.deckData, questionIndex: currentIndex + 1, score: params.score + question[1] }
                      )}
                    >
                      <Text style={styles.DeckMainStyle.sub}>{question[0]}</Text>
                    </TouchableOpacity>
              })}
            </View>
          </View>
          <View>
            <Text style={styles.DeckMainStyle.title}>{params.deckData.questions[currentIndex].answer}</Text>
          </View>
        </FlipCard>
      </View>
    );
  }
}

export default QuizDisplay;