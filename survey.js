/** @format */

const readline = require("readline");

// const rl = readline.createInterface({ input, output });

// const answer = await rl.question("What do you think of Node.js? ");

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable", (nickname) => {
  console.log(`Nice to meet you ${nickname}`);

  rl.question("What's your favorite music", (music) => {
    console.log(`I like ${music} too!`);
    // });
    rl.question(
      "What do you like to do in your free time",
      (favoriteActivity) => {
        console.log(`I can join you next time to ${favoriteActivity}`);
        rl.question(
          "What do you like to eat when you are happy?",
          (favoriteFood) => {
            console.log(`${favoriteFood} is delicious!!!`);
            rl.question(
              "What is your favorite winter sport?",
              (favoriteSport) => {
                console.log(`${favoriteSport} is very fun`);
                rl.question(
                  "Tell us about something, that only YOU do?",
                  (weirdFact) => {
                    console.log(`${weirdFact} is very fun`);

                    console.log(
                      `${nickname} loves listening to ${music} while ${favoriteActivity} or eating ${favoriteFood}, prefers ${favoriteSport} over any other sport, and is amazing at ${weirdFact}.`
                    );
                    rl.close();
                  }
                );
              }
            );
          }
        );
      }
    );
  });
});

//Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.
