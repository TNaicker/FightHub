const React = require('react');
import { Link } from 'react-router'

//CAROUSEL FOR THE MAIN PAGE.. Add functionality in jquery later?
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="carousel container-fluid box-shadow">
          <div className="row">
            <div className="col-xs-12">
              <div className="carousel-description">
                <h1>Guilty Gear character data!</h1>
                <Link to="/characters"><button className="btn btn-primary">Click here!</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
