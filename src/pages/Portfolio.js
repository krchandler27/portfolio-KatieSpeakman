import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles/Portfolio.css';
import weatherWidget from '../assets/images/weather-widget.JPG';
import passwordGenerator from '../assets/images/password-generator.JPG';
import { FaGithub } from 'react-icons/fa';
import dailyPlanner from '../assets/images/screen-shot.JPG';
import codeQuiz from '../assets/images/site.JPG';
import devGeeks from '../assets/images/devGeeks1.JPG';
import notely from '../assets/images/notely.jpg';
import teamProfile from '../assets/images/team-profile.jpg';
import grCritic from '../assets/images/grooveCritic.JPG';
import jate from '../assets/images/jate.JPG';
import pageTurner from '../assets/images/page-turner.JPG';



class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        maxWidth={750}
      >

        <a className="" href=" https://krchandler27.github.io/weather-widget/">
          <div>
            <img className="picture" src={weatherWidget} />
            <p className="display-6 mt-4">Weather Widget  &nbsp;<span> <a className="" href="https://github.com/krchandler27/weather-widget"> <FaGithub /> </a></span></p>
          </div>
        </a>

        <a className="" href="https://krchandler27.github.io/password-generator/">
          <div>
            <img className="picture" src={passwordGenerator} />
            <p className="display-6 mt-4">Password Generator  &nbsp;<span> <a className="" href="https://github.com/krchandler27/password-generator"> <FaGithub /> </a></span></p>
          </div>
        </a>

        <a className="" href="https://krchandler27.github.io/daily-planner/">
          <div>
            <img className="picture" src={dailyPlanner} />
            <p className="display-6 mt-4">Daily Planner  &nbsp;<span> <a className="" href="https://github.com/krchandler27/daily-planner"> <FaGithub /> </a></span></p>
          </div>
        </a>

        <a className="" href="https://krchandler27.github.io/test-your-knowledge/">
          <div>
            <img className="picture" src={codeQuiz} />
            <p className="display-6 mt-4">Coding Quiz  &nbsp;<span> <a className="" href="https://github.com/krchandler27/test-your-knowledge"> <FaGithub /> </a></span></p>
          </div>
        </a>

        <a className="" href="https://dev-geeks.herokuapp.com/">
          <div>
            <img className="picture" src={devGeeks} />
            <p className="display-6 mt-4"> devGeeks 🤓 &nbsp;<span> <a className="" href="https://github.com/krchandler27/devGeeks"> <FaGithub /> </a></span></p>
          </div>
        </a>

        <a className="" href="https://notely115.herokuapp.com/">
          <div>
            <img className="picture" src={notely} />
            <p className="display-6 mt-4"> Notely  &nbsp;<span> <a className="" href="https://github.com/krchandler27/notely-app"> <FaGithub /> </a></span></p>
          </div>
        </a>

        <a className="" href="https://www.loom.com/share/a5aafacc297547bb9b9526522bb2d1bc">
          <div>
            <img className="picture" src={teamProfile} />
            <p className="display-6 mt-4">Team Profile Generator &nbsp;<span> <a className="" href="https://github.com/krchandler27/team-profile-generator"> <FaGithub /> </a></span></p>
          </div>
        </a>
       
        <a className="" href="https://groove-critic.herokuapp.com/">
          <div>
            <img className="picture" src={grCritic} />
            <p className="display-6 mt-4"> Groove Critic  &nbsp;<span> <a className="" href="https://github.com/krchandler27/groove-critic"> <FaGithub /> </a></span></p>
          </div>
        </a>

        <a className="" href="https://just-another-text-editor-215.herokuapp.com/">
          <div>
            <img className="picture" src={jate} />
            <p className="display-6 mt-4"> J.A.T.E.  &nbsp;<span> <a className="" href="https://github.com/krchandler27/timeless-text-transformer"> <FaGithub /> </a></span></p>
          </div>
        </a>
 {/* Here */}
        <a className="" href="https://page-turner-book-club.herokuapp.com/">
          <div>
            <img className="picture" src={pageTurner} />
            <p className="display-6 mt-4"> 📚 Page Turner  &nbsp;<span> <a className="" href="https://github.com/krchandler27/page-turner"> <FaGithub /> </a></span></p>
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


