import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import './styles/Contact.css';


export default function Contact() {
  return (
    <div className="text-center m-5 totalFont">
      <h1 id="letsConnect" className="display-4">Let's Connect!</h1>
      <div className="anchors pt-4">
        <a className="fa-4x m-2" href="mailto:krchandler27@gmail.com?subject=Let's%20Connect!&body=Hi%20Katie,%0D%0A%0D%0AI%20saw%20your%20portfolio,%20and%20I%20wanted%20to%20connect%20with%20you.%0D%0A%0D%0A"> <SiGmail /></a>
        <a className="fa-4x m-2" href="https://github.com/krchandler27?tab=repositories"> <FaGithub /></a>
        <a className="fa-4x m-2" href="https://www.linkedin.com/in/katie-speakman/"> <BsLinkedin /></a>
      </div>
    </div>
  );
}
