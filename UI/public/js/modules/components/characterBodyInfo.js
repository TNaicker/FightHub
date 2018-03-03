import React from 'react';

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="character-info-main">
            <div className="body-midRow">
              <div className="body-mid real-mid">
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
