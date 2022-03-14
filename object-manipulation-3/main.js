console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'player1',
    hand: []
  },
  {
    name: 'player2',
    hand: []
  },
  {
    name: 'player3',
    hand: []
  },
  {
    name: 'player4',
    hand: []
  }
];

var cardDeck = [
  {
    rank: 'ace',
    suit: 'hearts'
  },
  {
    rank: '2',
    suit: 'hearts'
  },
  {
    rank: '3',
    suit: 'hearts'
  },
  {
    rank: '4',
    suit: 'hearts'
  },
  {
    rank: '5',
    suit: 'hearts'
  },
  {
    rank: '6',
    suit: 'hearts'
  },
  {
    rank: '7',
    suit: 'hearts'
  },
  {
    rank: '8',
    suit: 'hearts'
  },
  {
    rank: '9',
    suit: 'hearts'
  },
  {
    rank: '10',
    suit: 'hearts'
  },
  {
    rank: 'jack',
    suit: 'hearts'
  },
  {
    rank: 'queen',
    suits: 'hearts'
  },
  {
    rank: 'king',
    suits: 'hearts'
  },
  {
    rank: 'ace',
    suit: 'clubs'
  },
  {
    rank: '2',
    suit: 'clubs'
  },
  {
    rank: '3',
    suit: 'clubs'
  },
  {
    rank: '4',
    suit: 'clubs'
  },
  {
    rank: '5',
    suit: 'clubs'
  },
  {
    rank: '6',
    suit: 'clubs'
  },
  {
    rank: '7',
    suit: 'clubs'
  },
  {
    rank: '8',
    suit: 'clubs'
  },
  {
    rank: '9',
    suit: 'clubs'
  },
  {
    rank: '10',
    suit: 'clubs'
  },
  {
    rank: 'jack',
    suit: 'clubs'
  },
  {
    rank: 'queen',
    suits: 'clubs'
  },
  {
    rank: 'king',
    suits: 'clubs'
  },
  {
    rank: 'ace',
    suit: 'spades'
  },
  {
    rank: '2',
    suit: 'spades'
  },
  {
    rank: '3',
    suit: 'spades'
  },
  {
    rank: '4',
    suit: 'spades'
  },
  {
    rank: '5',
    suit: 'spades'
  },
  {
    rank: '6',
    suit: 'spades'
  },
  {
    rank: '7',
    suit: 'spades'
  },
  {
    rank: '8',
    suit: 'spades'
  },
  {
    rank: '9',
    suit: 'spades'
  },
  {
    rank: '10',
    suit: 'spades'
  },
  {
    rank: 'jack',
    suit: 'spades'
  },
  {
    rank: 'queen',
    suits: 'spades'
  },
  {
    rank: 'king',
    suits: 'spades'
  },
  {
    rank: 'ace',
    suit: 'diamonds'
  },
  {
    rank: '2',
    suit: 'diamonds'
  },
  {
    rank: '3',
    suit: 'diamonds'
  },
  {
    rank: '4',
    suit: 'diamonds'
  },
  {
    rank: '5',
    suit: 'diamonds'
  },
  {
    rank: '6',
    suit: 'diamonds'
  },
  {
    rank: '7',
    suit: 'diamonds'
  },
  {
    rank: '8',
    suit: 'diamonds'
  },
  {
    rank: '9',
    suit: 'diamonds'
  },
  {
    rank: '10',
    suit: 'diamonds'
  },
  {
    rank: 'jack',
    suit: 'diamonds'
  },
  {
    rank: 'queen',
    suits: 'diamonds'
  },
  {
    rank: 'king',
    suits: 'diamonds'
  }
];

var shuffledDeck = _.shuffle(cardDeck);
//console.log(shuffledDeck);

function dealCards (array) {
  var cardDeckCounter = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = cardDeckCounter; j < cardDeckCounter + 2; j++) {
      array[i]['hand'].push(shuffledDeck[j]);
    }
    cardDeckCounter += 2;
  }
}

function calculateScore (playerObject) {
  var playerScore = 0;
  for (var i = 0; i < 2; i++) {
    if (playerObject['hand'][i]['rank'] === 'ace') {
      playerScore += 11;
    } else if (playerObject['hand'][i]['rank'] === '2') {
      playerScore += 2;
    } else if (playerObject['hand'][i]['rank'] === '3') {
      playerScore += 3;
    } else if (playerObject['hand'][i]['rank'] === '4') {
      playerScore += 4;
    } else if (playerObject['hand'][i]['rank'] === '5') {
      playerScore += 5;
    } else if (playerObject['hand'][i]['rank'] === '6') {
      playerScore += 6;
    } else if (playerObject['hand'][i]['rank'] === '7') {
      playerScore += 7;
    } else if (playerObject['hand'][i]['rank'] === '8') {
      playerScore += 8;
    } else if (playerObject['hand'][i]['rank'] === '9') {
      playerScore += 9;
    } else {
      playerScore += 10;
    }
  }
  return playerScore;
}

function calculateWinner (array) {
  var winningIndex = 0;
  var winningScore = array.reduce(function (previousValue, currentValue, currentIndex) {
    if (previousValue > currentValue['score']) {
      return previousValue;
    } else {
      winningIndex = currentIndex;
      return currentValue['score']
    }
  }, 0);
  return {winningPlayer: players[winningIndex]['name'],winningScore: winningScore};
}

dealCards(players);

for (var i = 0; i < players.length; i++) {
  players[i]['score'] = calculateScore(players[i]);
}

console.log(calculateWinner(players));
