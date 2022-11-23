const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :)  ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer1) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer2) => {
      rl.question('What\'s your favourite thing to eat for that meal? ', (answer3) => {
        rl.question('Which sport is your absolute favourite? ', (answer4) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at? ', (answer5) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);

            console.log(`${answer} loves ${answer1}, devouring ${answer3} for ${answer2}, prefers ${answer4} over any other sport, and is amazing at ${answer5}.`);

            rl.close();
          });
        });
      });
    });
  });
});




/*
rl.question(query[, options])
query {string} A statement or query to write to output, prepended to the prompt.
options {Object}
signal {AbortSignal} Optionally allows the question() to be canceled using an AbortSignal.
Returns: {Promise} A promise that is fulfilled with the user's input in response to the query.
The rl.question() method displays the query by writing it to the output, waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.

When called, rl.question() will resume the input stream if it has been paused.
*/

