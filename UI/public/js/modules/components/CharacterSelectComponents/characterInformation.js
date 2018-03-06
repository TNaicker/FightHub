import React from 'react';

export default React.createClass({
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
