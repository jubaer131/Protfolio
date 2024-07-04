import React from 'react';
import Navbar from '../shard/Navbar';
import Banner from './Banner';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import ContactInformation from './ContactInformation';
import Newsletter from './Newsletter';
import Footer from '../shard/Footer';

const Home = () => {
    return (
        <div className='text-red-400'>
            <Navbar></Navbar>
            <Banner></Banner>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <ContactInformation></ContactInformation>
            <Newsletter></Newsletter>
            <Footer></Footer>
        </div>
    );
};

export default Home;