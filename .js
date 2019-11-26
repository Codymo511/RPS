function computerPlay() {
    const shapes = ['Rock', 'Paper', 'Scissors'];
    return shapes[ Math.floor(Math.random() * 3) ];
    }
      
function playRPS(computerSelection, playerSelection) {
  // player selection is set to the buttons id.     
  i++
  if (i < 6) {
    if (playerSelection === computerSelection) {       // Game tied.
        round.textContent = 'Game tied! Both players chose ' + playerSelection + '.';

    } else {
        if (playerSelection == 'Rock' && computerSelection == 'Scissors'
            || playerSelection == 'Paper' && computerSelection == 'Rock'
            || playerSelection == 'Scissors' && computerSelection == 'Paper') {
            round.textContent = 'You win! ' + playerSelection + ' beats ' + computerSelection + '.';
            playerScore++; //Player wins.
        } else {
            round.textContent = 'You lose! ' + playerSelection + ' beaten by ' + computerSelection + '.';
            computerScore++; //computer wins
            }
        }
