import React from 'react';

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="real-main">
            <div className="row body-topRow">
              <div className="col-xs-2 body-top">
              </div>
              <div className="col-xs-6 body-top">
              </div>
              <div className="col-xs-2 body-top">
              </div>
            </div>
            <div className="row body-midRow">
              <div className="col-xs-11 body-mid real-mid" style={{color: 'red'}}>
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
