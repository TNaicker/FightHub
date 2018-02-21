import React from 'react';

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="main">
            <div className="row body-topRow">
              <div className="col-xs-2">
              </div>
              <div className="col-xs-8 body-top">
              </div>
              <div className="col-xs-2">
              </div>
            </div>
            <div className="row body-midRow">
              <div className="col-xs-9 col-md-9 body-mid" style={{color: 'red'}}>
                { this.props.children }
              </div>
              <div className="col-xs-2 col-md-2 body-mid-side">
                <h1>global ranking</h1>
                <small>Pulled from shoryuken API</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
