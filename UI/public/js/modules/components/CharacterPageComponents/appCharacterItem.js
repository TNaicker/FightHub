import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
  render: function() {
    return(
      <Link to={"/characters/" + this.props.id}>
        <div className="col-xs-3 body-char" style={this.props.img}>
          <p>{this.props.id}</p>
        </div>
      </Link>
    )
  }
})
