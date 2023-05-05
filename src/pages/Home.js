import React from 'react';
import katiePic from '../assets/images/KatiePic.jpg';
import './styles/Home.css';

export default function Home() {
  return (

    <section className="about-me">
      <img className="katie-picture" src={katiePic} alt="Katie Speakman" />
      <article>
        <p className="info"> Greetings! I am happy you stumbled upon my webpage. A little about me, I am a Charleston, South Carolina native. But, these days,
          I find myself in the Wild West of Arizona. I recently graduated from the University of Arizona's
          Full-Stack Coding Bootcamp. While a student there, I was able to design over 20 projects, three of which, I
          worked on with a team. I'm glad you came across my portfolio. I would love to connect with you and help build applications for you and your team.
        </p>
        <p>-Katie</p>
      </article>
    </section>
  );
}
