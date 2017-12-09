import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'NEKOHAND';

const data = [
  {
    id: 0,
    title: 'JavaScript',
    questions: [
      {
        pid: 0,
        id: 0,
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  {
    id: 1,
    title: 'React',
    questions: [
      {
        pid: 1,
        id: 0,
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        pid: 1,
        id: 1,
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      },
    ]
  }
];

export async function setItem() {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data)).then(() => {
    return data;
  });
}

export async function setDecks(data) {
  return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data)).then(data => data);
}

export async function fetchDecks() {
  return AsyncStorage.getItem(STORAGE_KEY).then(res => {
    console.log('11111111111111111111', res);
    return res;
  });
}

export async function fetchCurrentDeck(deckId) {
  return AsyncStorage.getItem(STORAGE_KEY).then(res => {
    const data = JSON.parse(res);
    return data[deckId]
  });
}

export async function fetchDeckCurrentIndex() {
  return AsyncStorage.getItem(STORAGE_KEY).then(res => {
    const data = JSON.parse(res);
    return data[(data.length - 1)].id;
  });
}

export async function writeDatabase (contentObj) {
  return fetchDecks().then(res => {
    const data = JSON.parse(res);
    data.push(contentObj);
    return data;
  }).then((data) => {
    return setDecks(data)
  }).then((data) => {
    console.log('dddd', data);
  });
}

export async function writeDatabaseForQuestion(questionObj, index) {
  return fetchDecks().then(res => {
    const data = JSON.parse(res);
    data[index].questions.push(questionObj);
    return data;
  }).then((data) => {
    return setDecks(data)
  }).then((data) => {
    console.log('dddd', data);
  });
}


