import React from 'react';
// import { Navbar, Footer, Hero, OurServices, WhyUs, Banner, Testimonial, Faq } from './Components';

import NavbarComponent from './Components/NavbarComponent';
import Hero from './Components/Hero';
import OurServices from './Components/OurServices';
import WhyUs from './Components/WhyUs';
import Banner from './Components/Banner';
import Testimonial from './Components/Testimonial'
import Faq from './Components/Faq';
import Footer from './Components/Footer';

const App = () => {
    return (
        <div>
            {/* any code here */}
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
