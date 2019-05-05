const allowedMaxAttempts = 10;
const randomNumber = Math.floor((Math.random() * 100) + 1);

/*
   Array to store attempts by user.
 */
let userAttempts = [];

const button = document.querySelector('button');
const result = document.querySelector('#result');
const preview = document.querySelector('#preview')

button.addEventListener('click', compare);

function compare() {
    let userCurrentValue = document.getElementById('guess').value;
    let currentAttemptNumber = userAttempts.length + 1;

    if (currentAttemptNumber > allowedMaxAttempts) {
        result.textContent = 'Max attempts reached. You are a loser!';
    }
    else {
        userCurrentValue = parseInt(userCurrentValue);
        if (userCurrentValue === randomNumber) {
            result.textContent = 'Congrats! You made it.';
            button.setAttribute('disabled', 'disabled');
        }
        else {
            if (userCurrentValue > randomNumber) {
                result.textContent = 'Your input is greater.';
            }
            else {
                result.textContent = 'Your input is lower.';
            }
            userAttempts.push(userCurrentValue);

            // Update preview section.
            preview.textContent = userAttempts.toString();
        }
    }
}