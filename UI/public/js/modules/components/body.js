import React from 'react';

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="main col-xs-12 col-md-12">
              <div className="row body-topRow">
                <div className="col-xs-12 body-top">
                </div>
              </div>
              <div className="row body-midRow">
                <div className="col-xs-12 col-md-9 body-mid home-banners">
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
      </div>
    )
  }
})
