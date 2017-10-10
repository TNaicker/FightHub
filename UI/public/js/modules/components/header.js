import React from 'react';
import { Link } from 'react-router'


//HEADER FOR THE WEBSITE
export default React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid header">
          <div className="row head-upper">
            <div className="col-xs-12">
              <nav>
                <ul className="top-nav">
                  <li><Link to="/home">ICON</Link></li>
                  <li><a href="#">Login</a></li>
                  <li><a href="#">Signup</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row head-lower">
            <div className="col-xs-12">
              <nav>
                <ul className="bottom-nav">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/home">Games</Link></li>
                  <li><a href="https://github.com/TNaicker/FightHub">Github</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
