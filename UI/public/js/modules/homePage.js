const React = require('react');
const ReactDOM = require('react-dom');
require('bootstrap/dist/css/bootstrap.css');
require('../../css/app.css');
const Client = require('../../../../Client/clientFile');
import { Router, Route, hashHistory } from 'react-router'
import AppCarousel from './components/carousel';
import AppHead from './components/header';
import AppFooter from './components/footer';
import AppBody from './components/body';

const AppGameList = React.createClass({
  getInitialState() {
    return {
      client: new Client(),
      names: []
    };
  },
  render() {
    const items = this.state.names.map((name) => (
     <AppGameListItem value={name}/>
   ))

   return (
       <div>
       { items }
      </div>
    );
  },
  componentWillMount() {
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
  }
})


const AppGameListItem = React.createClass({
  render: function() {
    return(
        <div className="row body-game">
          <div className="col-xs-11">
            <h2>{this.props.value}</h2>
          </div>
        </div>
    )
  }
})


// Children are the router components and depends on the browser location
export default React.createClass({
  render: function () {
    return (
      <div>
        <AppCarousel/>
        <div className="empty-space"></div>
        <AppBody>
          <AppGameList/>
        </AppBody>
      </div>
    );
  }
})

export { AppGameList };
