import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import './styles/Header.css';

export default function Header() {

    return (
        <header className="pt-4 mt-5 content-section-heading text-center font-weight-bold">
            <div className="p-5">
            <h1 className="name">Katie Speakman | Software Developer</h1>
            <p className="title mt-3 mb-5">Full-Stack Web-Developer + Math Teacher + Mom </p>
            </div>
            <div className="topNav d-flex flex-wrap mx-auto justify-content-between text-center align-items-center pt-1 pb-1 mb-4">
                <a href="#aboutMe">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#experience">Experience</a>
                <a href="#letsConnect"> Contact </a>
                <a className="fa-4x m-2" href="mailto:krchandler27@gmail.com?subject=Let's%20Connect!&body=Hi%20Katie,%0D%0A%0D%0AI%20saw%20your%20portfolio,%20and%20I%20wanted%20to%20connect%20with%20you.%0D%0A%0D%0A"> <SiGmail /></a>
                <a className="fa-4x m-2" href="https://github.com/krchandler27?tab=repositories"> <FaGithub /></a>
                <a className="fa-4x m-2" href="https://www.linkedin.com/in/katie-speakman/"> <BsLinkedin /></a>
            </div>
        </header>

    );
}