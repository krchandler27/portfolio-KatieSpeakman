import React from 'react';
import katiePic from '../assets/images/KatiePic.jpg';
import './styles/Home.css';

export default function Home() {
  return (

    <section id="aboutMe" className="container bottom p-5">
      <div className="row d-flex flex-wrap mx-auto">
        <div className="col-md-6 col-sm-12">
          <img className="img-fluid katie-picture" src={katiePic} alt="Katie Speakman" />
        </div>
        <div className="col-md-6 col-sm-12">
          <p className="info mb-2"> Hi, I'm Katie, <br /> A native of Charleston, South Carolina, who now finds herself in the Wild West of Arizona. I recently graduated from the University of Arizona's Full-Stack Coding Bootcamp where I designed over 20 projects. Take a look around my site and <a href="#portfolio">check out some of my work.</a> I'd love to chat with you about what applications you are interested in building. <a href="#letsConnect">Let's Connect!</a>
          </p>
          <p className="signature">&#x2764; Katie Speakman</p>
        </div>
      </div>
    </section>
  );
}
