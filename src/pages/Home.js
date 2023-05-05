import React from 'react';
import katiePic from '../assets/images/KatiePic.jpg';
import './styles/Home.css';

export default function Home() {
  return (

    <section class="about-me">
        <img class="katie-picture" src={katiePic}  alt="Katie Speakman" />
        <article>
                        <p class="info"> Hello! My name is Katie Speakman and I am a Charleston, South Carolina native. These days,
                I find myself in the Wild West of Arizona. I recently graduated from the University of Arizona's
                Full-Stack Coding Bootcamp. While a student there, I was able to design over 20 projects, three of which, I
                worked on with a team. I'm glad you came across my portfolio. I would love to connect with you and build you the application of your dreams. You can click <a href="#contact-me">here</a> to get in touch with me. You can also click on the <a
                    href="#my-portfolio">links</a> below to see some of my work. I look
                forward to connecting with you.</p>
            <p>-Katie</p>
        </article>
    </section>
  );
}
