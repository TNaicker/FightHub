import React from 'react';

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-xs-12 games-body">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
})
