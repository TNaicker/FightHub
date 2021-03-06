const request = require('request-promise');
const BASE = 'http://localhost:8000/api';

class Client {
  constructor() {
  }
  // Games function just returns a list of the games in my db
  games() {
    return request({
      uri: BASE.concat('/games'),
      json: true,
    })
  }

  // Takes gameID as an argument to find the characters from the game you specify
  characters(gameID) {
    return request({
      uri: BASE.concat('/' + gameID + '/characters'),
      json: true,
    })
  }

  character(charName) {
    return request({
      uri: BASE.concat('/' + charName),
      json: true,
    })
  }

  // Normals returns a specified character's normal move information
  // I will edit this route and function to specify a game as well.
  normals(charName) {
    return request({
      uri: BASE.concat('/' + charName + '/normals'),
      json: true,
    })
  }

  rankings() {
    return request({
      uri: BASE.concat('/rankings/top'),
      json: true,
    })
  }
}

module.exports = Client;

// module.exports = ({
//   // Games function just returns a list of the games in my db
//   games: function games() {
//     return request(BASE.concat('/games'))
//   },
//
//   // Takes gameID as an argument to find the characters from the game you specify
//   characters: function characters(gameID) {
//     return request(BASE.concat('/' + gameID + '/characters'))
//   },
//
//   // Normals returns a specified character's normal move information
//   // I will edit this route and function to specify a game as well.
//   normals: function normals(charName) {
//     return request(BASE.concat('/' + charName + '/normals'))
//   }
// });
