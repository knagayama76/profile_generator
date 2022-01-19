"use strict";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let name = "";
// let activity = "";
// let meal = "";
// let sport = "";
// let superpower = "";

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  rl.question("What's an activity you like doing?", (activity) => {
    rl.question(
      "Which meal is your favourite (eg: dinner, brunch, etc.)",
      (meal) => {
        rl.question("Which sport is your absolute favourite?", (sport) => {
          rl.question(
            "What is your superpower? In a few words, tell us what you are amazing at!",
            (superpower) => {
              console.log(
                `Thank you for your valuable feedback:
                  ${name}, ${activity}, ${meal}, ${sport}, ${superpower}
                `
              );
              rl.close();
            }
          );
        });
      }
    );
  });
});

// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
