import React from 'react';
import ScrollUpButton from "react-scroll-up-button";

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <ScrollUpButton ContainerClassName="scroll"/>
          <div className="real-main col-xs-12 col-md-12">
            <div className="row body-topRow">
              <div className="col-xs-12 body-top">
              </div>
            </div>
            <div className="row body-midRow">
              <div className="body-mid real-mid" style={{color: 'red'}}>
                { this.props.children }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
