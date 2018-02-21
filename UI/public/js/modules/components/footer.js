import React from 'react';

// THIS IS THE FOOTER FOR THE WEBSITE
export default React.createClass({
  render: function() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row footer real-footer">
            <div className="col-xs-12 foot">
              <div className="col-xs-4"></div>
              <div className="col-xs-4"></div>
              <div className="col-xs-4"></div>
              <div className="col-xs-12 foot-bot">
                <small>ⓒ Tegan, INC. All Rights Reserved. All trademarks referenced herein are the properties of their respective owners. =]</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
