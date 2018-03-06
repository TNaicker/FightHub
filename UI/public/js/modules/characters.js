import React from 'react'
import AppBody from './components/CharacterPageComponents/realBody';
import AppCharacterList from './components/CharacterPageComponents/AppCharacterList';
import { Router, Route, hashHistory, Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <AppBody>
        <AppCharacterList/>
      </AppBody>
    )
  }
})
