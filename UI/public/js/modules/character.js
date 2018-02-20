import React from 'react'
import AppBody from './components/characterBody';
import Client from '../../../../Client/clientFile';
require('bootstrap/dist/css/bootstrap.css');

const CharacterInformation = React.createClass({
  render() {
    return (
      <div className="container-fluid">
        <div className="row info-top">
          <div className="col-xs-3 info-cell">
            <h1 style={{textAlign: 'center'}}>{this.props.name}</h1>
            <img className="char-profile" src={this.props.src}/>
          </div>
          <div className="col-xs-6 info-cell">
            <h1>Summary</h1>
            <h4>{this.props.summary}</h4>
          </div>
          <div className="col-xs-3 info-cell">
            <h1 style={{textAlign: 'center'}}>Universal stats</h1>
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

const NormalInfo = React.createClass({
  render() {
    return (
      <div>
        <table className="table table-bordered">
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
              <th>frame advantage</th>
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
          <h2>{this.props.params.characterName}</h2>
          <h4>{this.state.characterInfo.summary}</h4>
          <NormalInfo
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
  }
})
