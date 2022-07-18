'use strict'
// console.log(document.querySelector('.message').textContent);
// document.querySelector('#mesage');
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 16;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.number').value = 12;
// console.log(document.querySelector('.number').value);
let score = 20;

let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.highscore').textContent = '20';
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //When a player doesnt input a number
                                                  if (!guess) {
        document.querySelector('.message').textContent = 'No number';
        // When a player wins
    } else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b348';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.message').textContent = 'Correct Number ';
                                                     } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' Too high';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' You lost the game!';
            score--;
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = ' Too low';
            score--;
            document.querySelector('.score').textContent = score;
          } else {
            document.querySelector('.message').textContent = ' You lost the game!';
            score--;
            document.querySelector('.score').textContent = 0;
        }
    } else {
        document.querySelector('.message').textContent = '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
    }
});

document.querySelector('.number').style.width = '25rem';

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing... ';

    const guess = Number((document.querySelector('.guess').value = ' '));

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
});
                                                    