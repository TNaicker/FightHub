const request = require('request-promise');
const BASE = 'http://localhost:8000/api';


module.exports = ({
  games: function games() {
    return request(BASE.concat('/games'))
  },
  characters: function characters(gameID) {
    return request(BASE.concat('/' + gameID + '/characters'))
  },
  normals: function normals(charName) {
    return request(BASE.concat('/' + charName + '/normals'))
  }
});
