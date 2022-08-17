import React from 'react';


import NavbarComponent from './Components/NavbarComponent';
import Hero from './Components/Hero';
import OurServices from './Components/OurServices';
import WhyUs from './Components/WhyUs';
import Banner from './Components/Banner';
import Testimonial from './Components/Testimonial'
import Faq from './Components/Faq';
import Footer from './Components/Footer';

// styles
import './style.css'

const App = () => {
    return (
        <div>
            <NavbarComponent />
            <Hero />
            <OurServices />
            <WhyUs />
            <Banner />
            <Testimonial />
            <Faq />
            <Footer />
        </div>
    );
};

export default App;
