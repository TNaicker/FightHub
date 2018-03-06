const React = require('react');
const ReactDOM = require('react-dom');
const Client = require('../../../Client/clientFile');
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router'
import Home from './modules/homePage';
// import { AppGameList } from './modules/homePage';
import Index from './modules/index';
import Characters from './modules/characters';
import Character from './modules/character';
import Login from './modules/login';

// Wait for the window to load
window.onload = function () {
  const exampleApp = document.querySelector('#story-app');

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRedirect to="home" />
        <Route path="home" component={Home}/>
        <Route path="characters" component={Characters}/>
        <Route path="characters/:characterName" component={Character}/>
        <Route path="login" component={Login}/>
      </Route>
    </Router>,
    exampleApp
  );
}
