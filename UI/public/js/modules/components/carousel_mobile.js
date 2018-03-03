import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid mobile-carousel">
          <div className="row mobile-carousel-holder">
            <div className="col-xs-12 mobile-home-image-holder">
              <img className="mobile-home-image" src="https://orig00.deviantart.net/38ba/f/2015/288/5/a/guilty_gear___may_chibi_by_cubehero-d9d6xj7.png"/>
            </div>
            <div className="col-xs-12 mobile-home-description">
              <div className="mobile-home-description-holder">
                <h3>ALL YOUR FIGHTING GAME INFORMATION NEEDS</h3>
                <div className="btn-holder">
                  <Link to="/characters"><button className="btn btn-primary">CLICK HERE</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
