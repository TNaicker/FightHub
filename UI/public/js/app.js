const React = require('react');
const ReactDOM = require('react-dom');
const style = require('../css/app.css');
const Client = require('../../../Client/clientFile');

//HEADER FOR THE WEBSITE
const AppHead = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid header">
          <div className="row head-upper">
            <div className="col-xs-12">
              <nav>
                <ul className="top-nav">
                  <li><a href="#">ICON</a></li>
                  <li><a href="#">something</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="row head-lower">
            <div className="col-xs-12">
              <nav>
                <ul className="bottom-nav">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Github</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

//CAROUSEL FOR THE MAIN PAGE.. Add functionality in jquery later?
const AppCarousel = React.createClass({
  render: function() {
    return (
      <div>
        <div className="carousel container-fluid box-shadow">
          <div className="row">
            <div className="col-xs-12">
              <div className="carousel-description">
                <h1>Guilty Gear character data!</h1>
                <button className="btn btn-primary">Click here!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

//THIS IS THE MAIN BODY PORTION OF THE HOME PAGE
const AppBody = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container-fluid">
          <div className="main">
            <div className="row body-topRow">
              <div className="col-xs-2 body-top">
              </div>
              <div className="col-xs-6 body-top">
              </div>
              <div className="col-xs-2 body-top">
              </div>
            </div>
            <div className="row body-midRow">
              <div className="col-xs-11 body-mid">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

// THIS IS THE FOOTER FOR THE WEBSITE
const AppFooter = React.createClass({
  render: function() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row footer">
            <div className="col-xs-12 foot">

            </div>
          </div>
        </div>
      </div>
    )
  }

})

const App = React.createClass({
  getInitialState: function() {
    return {
      client: new Client(),
    }
  },
  render: function () {
    return (
      <div>
        <AppHead/>
        <AppCarousel/>
        <AppBody/>
        <AppFooter/>
      </div>
    );
  }
})

// Wait for the window to load
window.onload = function () {
  const exampleApp = document.querySelector('#story-app');

  ReactDOM.render(
    <App/>,
    exampleApp
  );
}
