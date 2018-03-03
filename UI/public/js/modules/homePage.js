const React = require('react');
const ReactDOM = require('react-dom');
require('bootstrap/dist/css/bootstrap.css');
require('../../css/app.css');
const Client = require('../../../../Client/clientFile');
import { Link } from 'react-router'
import $ from 'jquery'
import { Router, Route, hashHistory } from 'react-router'
import AppCarousel from './components/carousel';
import AppHead from './components/header';
import AppFooter from './components/footer';
import AppBody from './components/body';
import MobileCarousel from './components/carousel_mobile';

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


const AppGameListItem = React.createClass({
  render: function() {
    return(
        <div className="row body-game">
          <Link to="/characters">
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-xs-3">
                <img className="game-logo" src="http://ki.infil.net/images/punch.png"/>
              </div>
              <div className="col-xs-9 home-button">
                <h2 className="home-button-title">{this.props.value}</h2>
                <h4>Character information available here</h4>
              </div>
            </div>
          </div>
          </Link>
        </div>
    )
  }
})

const NewsItem = React.createClass({
  render: function() {
    return(
      <div className="row body-game">
        <div className="col-xs-12 col-md-12 home-button">
          <div className="row">
            <div className="col-xs-3">
              <img className="news-logo" src="https://cdn3.iconfinder.com/data/icons/communication-mass-media-news/512/world_news-512.png"/>
            </div>
            <a href="http://shoryuken.com/2017/10/10/vesperarcade-analyzes-street-fighter-v-arcade-editions-possible-new-v-triggers/">
            <div className="col-xs-9">
              <h2 className="home-button-title">VesperArcade analyzes Street Fighter V</h2>
              <h4></h4>
            </div>
            </a>
          </div>
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
        <MobileCarousel/>
        <div className="empty-space"></div>
        <AppBody>
          <AppGameList/>
          <NewsItem/>
        </AppBody>
      </div>
    );
  }
})

export { AppGameList };
