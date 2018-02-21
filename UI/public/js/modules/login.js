import React from 'react'
import AppBody from './components/credentialBody';
import Client from '../../../../Client/clientFile';
const ReactDOM = require('react-dom');
require('bootstrap/dist/css/bootstrap.css');

export default React.createClass({
  render() {
    return(
      <div>
        <AppBody/>
      </div>
    )
  }
})
