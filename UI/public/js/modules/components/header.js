import React from 'react';
import { Link } from 'react-router'
import ScrollUpButton from "react-scroll-up-button";


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
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/home">Signup</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row head-lower">
            <div className="col-xs-12 bot-nav">
              <div className="bot-nav-button col-xs-4">
                <Link to="/home"><button>Home</button></Link>
              </div>
              <div className="bot-nav-button col-xs-4">
                <Link to="/games"><button>Games</button></Link>
              </div>
              <div className="bot-nav-button col-xs-4">
                <a href="https://github.com/TNaicker/FightHub"><button>Github</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
