const React = require('react');
const ReactDOM = require('react-dom');
require('bootstrap/dist/css/bootstrap.css');
require('../../css/app.css');
const Client = require('../../../../Client/clientFile');
import { Link } from 'react-router'
import $ from 'jquery'
import { Router, Route, hashHistory } from 'react-router'
import AppCarousel from './components/HomeComponents/carousel';
import AppHead from './components/header';
import AppFooter from './components/footer';
import AppBody from './components/body';
import MobileCarousel from './components/HomeComponents/carousel_mobile';
import AppGameList from './components/HomeComponents/appGameList';


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
