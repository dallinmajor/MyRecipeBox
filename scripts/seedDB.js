const mongoose = require("mongoose");
const db = require("../models");
const MONGODB_URI = require("../config/keys");

mongoose.connect(
  MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const userSeed = [
  {
    username: 'test',
    name: 'Test Man',
    occupation: "Tester",
    favColor: "I have no soul"
  },
  {
    username: 'johnsnow',
    name: 'John Snow',
    occupation: "Ranger for the Night's Watch",
    favColor: "Black"
  },
  {
    username: 'peterparker',
    name: 'Peter Parker',
    occupation: "Photographer for the Bugle",
    favColor: "Red and Blue"
  },
  {
    username: 'sasukeuchiha',
    name: 'Sasuke Uchiha',
    occupation: "Avenger",
    favColor: "Red"
  },
  {
    username: 'saitama',
    name: 'Saitama',
    occupation: 'Hero for fun',
    favColor: "Yellow"
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
