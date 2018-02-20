import React, { Component } from 'react'
import Slider from 'react-slick';
const ReactDOM = require('react-dom');
import { Link } from 'react-router'
import $ from "jquery";

const carouselImages = [
  "http://nichegamer.com/wp-content/uploads/2015/09/guilty-gear-xrd-revelator-09-14-15-1.jpg",
  "https://img00.deviantart.net/92e4/i/2015/190/a/5/sfv_ken_wallpaper_by_heypierce-d90mt9j.jpg",
  "https://images2.alphacoders.com/657/657268.jpg",
]
var counter = 0;

export default class AppCarousel extends Component {
  render() {
  	var settings = {
    	dots: true,
      infinite: true,
      speed: 50,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      fade: true,
      pauseOnHover: true,
      centerMode: true,
      beforeChange: function() {
        var carousel = $('.carousel-container');
        if(counter >= 2) {
          counter = 0;
          console.log('counter in if', counter);
          carousel.css('background-image', `url(${carouselImages[counter]})`)
        } else {
          counter++;
          console.log(counter);
          carousel.css('background-image', `url(${carouselImages[counter]})`)
        }
      }
    }
    return (
    	<div className="carousel-container" ref="container">
      	<Slider {...settings}>
          <div className="carousel-description">
            <h1>Guilty Gear character data!</h1>
            <Link to="/characters"><button className="btn btn-primary">Click here!</button></Link>
          </div>
          <div className="carousel-description">
            <h1>SFV character data!</h1>
            <Link to="/characters"><button className="btn btn-primary">Click here!</button></Link>
          </div>
          <div className="carousel-description">
            <h1>BlazBlue character data!</h1>
            <Link to="/characters"><button className="btn btn-primary">Click here!</button></Link>
          </div>
        </Slider>
      </div>
    );
  }
  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.container).style.backgroundImage=`url(${carouselImages[0]})`;
  }
}
