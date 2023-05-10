import React from 'react';
import katiePic from '../assets/images/KatiePic.jpg';
import './styles/Home.css';

export default function Home() {
  return (

    <div id="aboutMe" className="mt-5 bottom">
      <div className="row d-flex flex-wrap align-items-center justify-content-between">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img className="katie-picture img-fluid text-center mx-auto" src={katiePic} alt="Katie Speakman" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto text-center">
          <p className="info"> Hi! I'm Katie <br></br>  I grew up along the beaches of Charleston, South Carolina, but now find myself in the Wild West of Arizona. After graduating from Brigham Young University in 2015, with a Bachelor of Science in Mathematics Education, I moved to Arizona to teach High School Mathematics. I recently graduated from the University of Arizona's Full-Stack Coding Bootcamp in May of 2023, where I designed over 20 projects, whilst still teaching full-time. Take a look around my site and <a href="#portfolio">check out some of my work.</a> I would love to connect with you and chat about designing the application(s) of your dreams. <a href="#letsConnect">Let's Connect!</a>
          </p>
          <p className="signature">&#x2764; Katie Speakman</p>
        </div>
      </div>
    </div>
  );
}
