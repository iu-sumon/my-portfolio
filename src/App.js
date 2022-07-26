import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Cursor from './components/Cursor/Cursor';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/>
            <Cursor/>
        </>
    );
};

export default App;