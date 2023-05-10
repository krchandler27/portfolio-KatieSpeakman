import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles/Portfolio.css';
import weatherWidget from '../assets/images/weather-widget.JPG';
import passwordGenerator from '../assets/images/password-generator.JPG';
import { FaGithub } from 'react-icons/fa';



class DemoCarousel extends Component {
  render() {
    return (
      <Carousel maxWidth={750}>

        <a className="" href=" https://krchandler27.github.io/weather-widget/">
          <div>
          <img className="picture" src={weatherWidget} />
          <p className="display-5 mt-3">Weather Widget  &nbsp;<span> <a className="" href="https://github.com/krchandler27/weather-widget"> <FaGithub /> </a></span></p>
        </div>
        </a>
{/* Here */}
        <a className="" href=" https://krchandler27.github.io/weather-widget/">
          <div>
          <img className="picture" src={passwordGenerator} />
          <p className="display-5 mt-3">Password Generator  &nbsp;<span> <a className="" href="https://github.com/krchandler27/weather-widget"> <FaGithub /> </a></span></p>
        </div>
        </a>

        <a className="" href=" https://krchandler27.github.io/weather-widget/">
          <div>
          <img className="picture" src={weatherWidget} />
          <p className="display-5 mt-3">Weather Widget  &nbsp;<span> <a className="" href="https://github.com/krchandler27/weather-widget"> <FaGithub /> </a></span></p>
        </div>
        </a>

        <a className="" href=" https://krchandler27.github.io/weather-widget/">
          <div>
          <img className="picture" src={weatherWidget} />
          <p className="display-5 mt-3">Weather Widget  &nbsp;<span> <a className="" href="https://github.com/krchandler27/weather-widget"> <FaGithub /> </a></span></p>
        </div>
        </a>

            </Carousel>

    );
  }
}

export default function Portfolio() {
  return (
    <div className="m-5 mt-5 totalFont bottom text-center">
      <h1 id="portfolio" className="display-4 mb-4">Portfolio</h1>
      <div className='col-lg-6 col-md-6 col-sm-12 mx-auto'>
        <div className="text-center d-flex justify-content-center">
          <DemoCarousel />
        </div>
      </div>
    </div>
  );
}


