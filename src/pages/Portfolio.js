import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles/Portfolio.css';
import weatherWidget from '../assets/images/weather-widget.JPG';
import passwordGenerator from '../assets/images/password-generator.JPG';



class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        maxWidth={750}
      >

        <div>
        <a className="fa-5x m-2" href="https://github.com/krchandler27/weather-widget"> <img className="picture" src={weatherWidget} /></a>
          <p className="">Weather Widget</p>
          
        </div>
        <div>
          <img className="picture" src={passwordGenerator} />
          <p className="">Password Generator</p>
        </div>

      </Carousel>

    );
  }
}

export default function Portfolio() {
  return (
    <div className="m-5 mt-5 totalFont bottom text-center bg-yellow">
      <h1 id="portfolio">Portfolio</h1>
      <div className='col-lg-6 col-md-6 col-sm-12 mx-auto'>
      <div className="text-center d-flex justify-content-center">
        <DemoCarousel />
      </div>
      </div>
    </div>
  );
  console.log(DemoCarousel);
}


