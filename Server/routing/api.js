const express = require('express');
const router = express.Router();
const knex = require('../db.js');

const characterDefinition = {
  answer: 1,
  axl: 2,
  baiken: 3,
  bedman: 4,
  chipp: 5,
  dizzy: 6,
  elphelt: 7,
  faust: 8,
  haehyun: 9,
  ino: 10,
  jacko: 11,
  jam: 12,
  johnny: 13,
  ky: 14,
  leo: 15,
  may: 16,
  millia: 17,
  potemkin: 18,
  ramlethal: 19,
  raven: 20,
  sin: 21,
  slayer: 22,
  sol: 23,
  venom: 24,
  zato: 25,
}

// ROUTE TO PULL UP ALL GAMES
router.get('/api/games', (req, res) => {
  knex('games')
    .then((gameList) => {
      res.send(gameList);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

// ROUTE TO PULL UP ALL CHARACTERS FOR SPECIFIC GAME
router.get('/api/:gameID/characters', (req, res) => {
  //Setting const for entered gameID
  const GAME = req.params.gameID;

  //Accessing database to check if the gameID exists
  knex('games')
    .where('id', GAME)
    .then((result) => {
      //If the game exists then we will dive into the character table and pull any character that is linked to the related game ID.
      knex('characters')
        .where("game_id", GAME)
        .then((characterList) => {
          var parsedList = JSON.stringify(characterList)
          res.send(parsedList);
        })
        .catch((err) => {
          console.log(err);
          res.sendStatus(500);
        })
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

// ROUTE THAT PULLS UP SPECIFIC CHARACTER INFO
router.get('/api/:characterName', (req, res) => {
  //This line uses the object at the top to find the character being called.
  const CHAR = characterDefinition[req.params.characterName];
  knex('characters')
    .where('id', CHAR)
    .then((character) => {
      res.send(character);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

// ROUTE THAT PULLS UP SPECIFIC CHARACTER'S NORMALS
router.get('/api/:characterName/normals', (req, res) => {
  //This line uses the object at the top to find the character being called.
  const CHAR = characterDefinition[req.params.characterName];
  knex('normals')
    .where('char_id', CHAR)
    .then((normals) => {
      res.send(normals);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

// =============== EVERYTHING BELOW HERE NEEDS TO BE REFINED ================

// ROUTE TO PULL UP ALL CHARACTERS
router.get('/api/characters', (req, res) => {
  knex('characters')
    .then((characterList) => {
      res.send(characterList);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

// ROUTE TO PULL UP ALL THE NORMALS IN THE DB (GOD WHY?)
// Might remove this route in the future... lol...
router.get('/api/normals', (req, res) => {
  knex('normals')
    .then((normalsList) => {
      res.send(normalsList);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
})

module.exports = router;
