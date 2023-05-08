import React from 'react';
import './styles/Nav.css';
import { HiHome } from 'react-icons/hi';
import { FaSmileWink } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { useState } from 'react';




const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (

      <div className="navBox">
      <nav>

        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome /></a>

        <a href="#aboutMe" onClick={() => setActiveNav('#aboutMe')} className={activeNav === '#aboutMe' ? 'active' : ''}><FaSmileWink /></a>

        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaBriefcase /></a>

        <a href="#letsConnect" onClick={() => setActiveNav('#letsConnect')} className={activeNav === '#letsConnect' ? 'active' : ''}><MdOutlineConnectWithoutContact /></a>

      </nav>
      </div>

  )

}

export default Nav