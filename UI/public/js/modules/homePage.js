const React = require('react');
const ReactDOM = require('react-dom');
const style = require('../../css/app.css');
const Client = require('../../../../Client/clientFile');
import { Router, Route, hashHistory } from 'react-router'

//HEADER FOR THE WEBSITE
const AppHead = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid header">
          <div className="row head-upper">
            <div className="col-xs-12">
              <nav>
                <ul className="top-nav">
                  <li><a href="#">ICON</a></li>
                  <li><a href="#">something</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row head-lower">
            <div className="col-xs-12">
              <nav>
                <ul className="bottom-nav">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Github</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

//CAROUSEL FOR THE MAIN PAGE.. Add functionality in jquery later?
const AppCarousel = React.createClass({
  render: function() {
    return (
      <div>
        <div className="carousel container-fluid box-shadow">
          <div className="row">
            <div className="col-xs-12">
              <div className="carousel-description">
                <h1>Guilty Gear character data!</h1>
                <button className="btn btn-primary">Click here!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
const AppBody = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="main">
            <div className="row body-topRow">
              <div className="col-xs-2 body-top">
              </div>
              <div className="col-xs-6 body-top">
              </div>
              <div className="col-xs-2 body-top">
              </div>
            </div>
            <div className="row body-midRow">
              <div className="col-xs-11 body-mid" style={{color: 'red'}}>
                { this.createList() }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  createList: function() {
    return this.props.gameNames.map((name) => (
      <AppGameList value={name}/>
    ))
  }
})

// THIS IS THE FOOTER FOR THE WEBSITE
const AppFooter = React.createClass({
  render: function() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row footer">
            <div className="col-xs-12 foot">

            </div>
          </div>
        </div>
      </div>
    )
  }
})

const AppGameList = React.createClass({
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

const App = React.createClass({
  getInitialState: function() {
    return {
      client: new Client(),
      gameName: [],
    }
  },
  componentWillMount: function() {
    this.state.client.games().then((games) => {
      //Declaration of consts for holding game data
      const gameArr = [];
      //Putting game names into array
      games.forEach((game) => {
        gameArr.push(game.game_name);
      })
      //Set state gameName to array of game names
      this.setState({gameName: gameArr})
    })
  },
  render: function () {
    return (
      <div>
        <AppHead/>
        <AppCarousel/>
        <AppBody gameNames={this.state.gameName}/>
        <AppFooter/>
      </div>
    );
  }
})

export default React.createClass({
  getInitialState: function() {
    return {
      client: new Client(),
      gameName: [],
    }
  },
  componentWillMount: function() {
    this.state.client.games().then((games) => {
      //Declaration of consts for holding game data
      const gameArr = [];
      //Putting game names into array
      games.forEach((game) => {
        gameArr.push(game.game_name);
      })
      //Set state gameName to array of game names
      this.setState({gameName: gameArr})
    })
  },
  render: function () {
    return (
      <div>
        <AppHead/>
        <AppCarousel/>
        <AppBody gameNames={this.state.gameName}/>
        <AppFooter/>
      </div>
    );
  }
})
