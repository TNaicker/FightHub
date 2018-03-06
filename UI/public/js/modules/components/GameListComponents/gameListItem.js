import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
  render: function() {
    return(
        <div className="row body-game">
          <Link to="/characters">
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-xs-3">
                <img className="game-logo" src="http://ki.infil.net/images/punch.png"/>
              </div>
              <div className="col-xs-9 home-button">
                <h2 className="home-button-title">{this.props.value}</h2>
                <h4>Character information available here</h4>
              </div>
            </div>
          </div>
          </Link>
        </div>
    )
  }
})
