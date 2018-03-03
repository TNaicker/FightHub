import React from 'react';
import ScrollUpButton from "react-scroll-up-button";

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <ScrollUpButton ContainerClassName="scroll"/>
          <div className="real-main">
            <div className="row body-topRow">
              <div className="col-xs-2">
              </div>
              <div className="col-xs-8 body-top">
              </div>
              <div className="col-xs-2">
              </div>
            </div>
            <div className="row body-midRow">
              <div className="col-xs-12 body-mid real-mid" style={{color: 'red'}}>
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
