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
            <body className="bg-dark text-white">
                <Header className="col-sm-12 col-md-9 col-lg-6 mx-auto" />
                <Nav className="col-sm-12 col-md-9 col-lg-6 mx-auto" />
                <Home className="col-sm-12 col-md-9 col-lg-6 mx-auto" />
                <Portfolio className="col-sm-12 col-md-9 col-lg-6 mx-auto" />
                <Resume className="col-sm-12 col-md-9 col-lg-6 mx-auto" />
                <Contact className="col-sm-12 col-md-9 col-lg-6 mx-auto" />
                <Footer className="col-sm-12 col-md-9 col-lg-6 mx-auto" />
            </body>
        </>
    )
}