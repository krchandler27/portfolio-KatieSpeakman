import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export default function App() {
 
    return (
        <>
        <div className='bs-dark'>
            <Header/>
            <Nav/>
            <Home/>
            <Resume/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
        </>
    )
}