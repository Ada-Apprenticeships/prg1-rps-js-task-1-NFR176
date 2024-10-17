let rules = //the variable rules- defines which player will win, when against the quoted string.
    { rock: ['scissors', 'lizard'],
   paper:[ 'rock' ,  'spock' ],
   scissors: ['paper', 'lizard'],
    Lizard: ['spock',  'paper' ],
    Spock: ['scissors', 'rock'],
  }
if (player1===player2) {
  return 'draw';//if statement used to compare player1 and player2s choice. Will return draw if players display the same choice
  
}
else {
  return rules[player1].includes(player2) ? 'player1' : 'player2';
  //? The ternary operator conveys whether player2s options, fits within player ones rules.
}


