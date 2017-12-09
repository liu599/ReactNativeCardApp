var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var port = '3090';

var app = express();

app.use(compression());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

app.use('/', express.static('.'));

class deck {
    constructor(title, questions) {
      this.title = title;
      this.questions = questions;
    }
    
    addQuestion(questions) {
      if (Array.isArray(questions)) {
        questions.forEach((q) => {
          this.questions.push(q);
        })
      }
    };
    
    deleteQuestion(index) {
      this.questions.slice(index, 1);
    };
}

var deckDatabase = [];
deckDatabase.push(new deck('React', [
  {
    question: 'What is React?',
    answer: 'A library for managing user interfaces'
  },
  {
    question: 'Where do you make Ajax requests in React?',
    answer: 'The componentDidMount lifecycle event'
  }
]));
deckDatabase.push(new deck('JavaScript', [
  {
    question: 'What is a closure?',
    answer: 'The combination of a function and the lexical environment within which that function was declared.'
  }
]));

app.get('/v1/decks', function(req, res, next) {
  var response = Object.assign({data: deckDatabase});
  res.send(JSON.stringify(response));
});

app.post('/v1/deck', function(req, res, next) {
  try {
    var message = req.body;
    if (!message.hasOwnProperty('title') ||  !message.hasOwnProperty('questions') )
    {
      res.send(JSON.stringify({'success': false, 'error': 'unknown file type error!'}));
      return;
    }
    deckDatabase.push(new deck(message.title, message.questions));
    console.log(JSON.stringify(new deck(message.title, message.questions)));
  } catch(error) {
    res.send(JSON.stringify({'success': false, 'error': error}));
    return;
  }
  res.send(JSON.stringify({'success': true}));
});

app.post('/v1/deck/detail', function(req, res, next) {
  var deckIndex = parseInt(req.body.index, 10);
  deckIndex = deckIndex >= 0 ? deckIndex : res.send(JSON.stringify({'success': false, 'error': 'index should not be negative'}));
  var data = deckDatabase[deckIndex];
  if (data) {
    res.send(JSON.stringify({'success': true, data}));
  } else {
    res.send(JSON.stringify({'success': false, 'error': 'non-exist'}));
  }
});


app.post('/v1/card', function(req, res, next) {
  try {
    var message = req.body;
    if (!Array.isArray(message.card) || !message.hasOwnProperty('index') || !deckDatabase[parseInt(message.index, 10)])
    {
      res.send(JSON.stringify({'success': false, 'error': 'unknown file type error!'}));
      return;
    }
    deckDatabase[parseInt(message.index, 10)].addQuestion(message.card);
  } catch(error) {
    res.send(JSON.stringify({'success': false, 'error': error}));
    return;
  }
  res.send(JSON.stringify({'success': true}));
});



module.exports = app.listen(port, '192.168.1.108', function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('Listening at http://192.168.1.108:' + port + '\n')
});
