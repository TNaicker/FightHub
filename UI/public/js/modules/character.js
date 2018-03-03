import React from 'react'
import AppBody from './components/characterBodyInfo';
import Client from '../../../../Client/clientFile';
const ReactDOM = require('react-dom');
require('bootstrap/dist/css/bootstrap.css');

const CharacterInformation = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <div className="row info-top">
          <div className="col-xs-8 info-cell">
            <h1>{this.props.name}</h1>
            <img className="char-profile" src={this.props.src}/>
          </div>
          <div className="col-xs-4 info-cell">
            <h1>Universal stats</h1>
            <h3>Defense modifier: {this.props.charinfo.defense_modifier}</h3>
            <h3>guts:* {this.props.charinfo.guts}</h3>
            <h3>Weight: {this.props.charinfo.weight}</h3>
            <h3>Stun resistance: {this.props.charinfo.stun_resistance}</h3>
            <h3>Jump Startup: {this.props.charinfo.jump_startup}</h3>
            <h3>Backdash startup: {this.props.charinfo.backdash_startup}</h3>
            <h3>Backdash invlun: {this.props.charinfo.backdash_invulnerability}</h3>
          </div>
        </div>
      </div>
    )
  }
})

const NormalRow = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.row.normal_name}</td>
        <td>{this.props.row.damage}</td>
        <td>{this.props.row.guard}</td>
        <td>{this.props.row.attack_lvl}</td>
        <td>{this.props.row.startup}</td>
        <td>{this.props.row.active}</td>
        <td>{this.props.row.invuln}</td>
        <td>{this.props.row.recovery}</td>
        <td>{this.props.row.frame_advantage}</td>
      </tr>
    )
  }
})

const NormalRow1 = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.row.normal_name}</td>
        <td>{this.props.row.damage}</td>
        <td>{this.props.row.guard}</td>
        <td>{this.props.row.attack_lvl}</td>
        <td>{this.props.row.startup}</td>
      </tr>
    )
  }
})
const NormalRow2 = React.createClass({
  render() {
    return(
      <tr>
        <td>{this.props.row.normal_name}</td>
        <td>{this.props.row.active}</td>
        <td>{this.props.row.invuln}</td>
        <td>{this.props.row.recovery}</td>
        <td>{this.props.row.frame_advantage}</td>
      </tr>
    )
  }
})

const NormalInfoMobile2 = React.createClass({
  render() {
    return (
      <div>
        <table className="mobile-table table table-bordered">
          <thead>
            <tr>
              <th>normal</th>
              <th>active</th>
              <th>invlun</th>
              <th>recovery</th>
              <th>frame adv</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  },
  renderRows() {
    return this.props.charmoves.map((row) => {
      return <NormalRow2 row={row}/>
    })
  }
})

const NormalInfoMobile1 = React.createClass({
  render() {
    return (
      <div>
        <table className="mobile-table table table-bordered">
          <thead>
            <tr>
              <th>normal</th>
              <th>damage</th>
              <th>guard</th>
              <th>attack level</th>
              <th>startup</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  },
  renderRows() {
    return this.props.charmoves.map((row) => {
      return <NormalRow1 row={row}/>
    })
  }
})

const NormalInfo = React.createClass({
  render() {
    return (
      <div>
        <table className="normal-table table">
          <thead>
            <tr>
              <th>normal</th>
              <th>damage</th>
              <th>guard</th>
              <th>attack level</th>
              <th>startup</th>
              <th>active</th>
              <th>invlun</th>
              <th>recovery</th>
              <th>frame adv</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  },
  renderRows() {
    return this.props.charmoves.map((row) => {
      return <NormalRow row={row}/>
    })
  }
})

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
          <div className="row">
            <div className="col-xs-12 col-md-12 video-holder">
              <h3>Watch Live GGXRD Gameplay</h3>
              <iframe
                className="video"
                src="http://player.twitch.tv/?channel=joniosan&muted=true"
                height="600"
                width="800"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true">
              </iframe>
              <iframe
                className="video-small"
                src="http://player.twitch.tv/?channel=joniosan&muted=true"
                height="300"
                width="400"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true">
              </iframe>
              <iframe
                className="video-mobile"
                src="http://player.twitch.tv/?channel=joniosan&muted=true"
                height="200"
                width="300"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true">
              </iframe>
            </div>
          </div>
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
