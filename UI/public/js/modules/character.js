import React from 'react'
import AppBody from './components/CharacterSelectComponents/characterBodyInfo';
import Client from '../../../../Client/clientFile';
import CharacterInformation from './components/CharacterSelectComponents/characterInformation';
import { NormalInfoMobile1, NormalInfoMobile2 } from './components/CharacterSelectComponents/normalInfoMobile';
import NormalInfo from './components/CharacterSelectComponents/normalInfo';
import TwitchPlayer from './components/CharacterSelectComponents/twitch';
const ReactDOM = require('react-dom');
require('bootstrap/dist/css/bootstrap.css');

export default React.createClass({
  getInitialState() {
    return {
      client: new Client(),
      characterInfo: [],
      characterMoves: [],
    }
  },
  render() {
    console.log('CHARINFOHERE',this.state.characterInfo);
    console.log('CHARNORMALS', this.state.characterMoves)
    return (
      <div>
        <CharacterInformation
          src={this.state.characterInfo.img_url}
          name={this.state.characterInfo.character_name}
          summary={this.state.characterInfo.summary}
          charinfo={this.state.characterInfo}
        />
        <AppBody>
          <h2 style={{color: 'white'}}>{this.props.params.characterName}</h2>
          <h4 className="summary">{this.state.characterInfo.summary}</h4>
          <NormalInfo
            className="normal-table"
            charmoves={this.state.characterMoves}
          />
          <NormalInfoMobile1
            className="mobile-table"
            charmoves={this.state.characterMoves}
          />
          <NormalInfoMobile2
            className="mobile-table"
            charmoves={this.state.characterMoves}
          />
        </AppBody>
      </div>
    )
  },
  componentWillMount() {
    const characterName = this.props.params.characterName.toLowerCase();
    const filteredName = characterName.match(/^([\w\-]+)/g);

    this.state.client.character(filteredName[0])
      .then((charinfo) => {
        this.state.client.normals(filteredName[0])
          .then((charnormals) => {
            this.setState({characterMoves: charnormals, characterInfo: charinfo[0]});
        })
    })
  },
  componentDidMount() {
    window.scrollTo(0,0);
  }
})
