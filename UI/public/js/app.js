const React = require('react');
const ReactDOM = require('react-dom');
const Client = require('../../../Client/clientFile');
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './modules/homePage';
// import { AppGameList } from './modules/homePage';
import Index from './modules/index';
import Characters from './modules/characters';

// Wait for the window to load
window.onload = function () {
  const exampleApp = document.querySelector('#story-app');

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <Route path="home" component={Home}/>
        <Route path="characters" component={Characters}/>
      </Route>
    </Router>,
    exampleApp
  );
}
