import React from 'react';
import Client from '../../../../../../Client/clientFile';
import $ from 'jquery';
import AppGameListItem from './appGameListItem';

export default React.createClass({
  getInitialState() {
    return {
      client: new Client(),
      names: []
    };
  },
  render() {
    const items = this.state.names.map((name, ind) => (
     <AppGameListItem value={name} key={'GLI ' + ind}/>
   ))

   return (
       <div>
       {this.rankings}
       { items }
      </div>
    );
  },
  componentWillMount() {
    this.state.client.rankings().then((result) => {
      result.forEach((table) => {
        $('.body-mid-side').append(table);
      })
    })
    this.state.client.games().then((games) => {
      //Declaration of consts for holding game data
      const gameArr = [];
      //Putting game names into array
      games.forEach((game) => {
        gameArr.push(game.game_name);
      })
      //Set state gameName to array of game names
      this.setState({names: gameArr})
    })
  },
  rankings() {
    this.state.client.rankings().then((result) => {
      console.log(result);
    })
  }
})
