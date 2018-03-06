import React from 'react';
import GamesBody from './components/GameListComponents/gamesBody'
import GameList from './components/GameListComponents/gameList';

export default React.createClass({
  render() {
    return (
      <GamesBody>
        <h1 className="game-list-title">list of games</h1>
        <GameList />
      </GamesBody>
    )
  }
})
