import React from 'react';
import logo from '../img/logo.png';

import facebook from '../img/icons/icon_facebook.png';
import instagram from '../img/icons/icon_instagram.png';
import twitter from '../img/icons/icon_twitter.png';
import mail from '../img/icons/icon_mail.png';
import twitch from '../img/icons/icon_mail.png';

const Footer = () => {
    return (
        <div class="container-md d-flex flex-column flex-md-row justify-content-between mt-5 mb-3 footer-container">
            <div class="address footer-child">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>

            <div class="navigation d-flex flex-column footer-child">
                <ul>
                    <li>
                        <a href="#our-services"> Our services</a>
                    </li>
                    <li>
                        <a href="#why-us">Why Us </a>
                    </li>
                    <li>
                        <a href="#testimonial">Testimonial </a>
                    </li>
                    <li>
                        <a href="#faq-section">FAQ </a>
                    </li>
                </ul>
            </div>

            <div class="sosmed footer-child">
                <p>Connect with us</p>
                <div class="icon-container d-flex">
                    <img class="sosmed-icon" src={facebook} alt="facebook-icon" />
                    <img class="sosmed-icon" src={instagram} alt="instagram-icon" />
                    <img class="sosmed-icon" src={twitter} alt="twitter-icon" />
                    <img class="sosmed-icon" src={mail} alt="mail-icon" />
                    <img class="sosmed-icon" src={twitch} alt="twitch-icon" />
                </div>
            </div>

            <div class="copyright footer-child">
                <p>Copyright Binar 2022</p>
                <a href="#hero-section">
                    <img src={logo} alt="Company-Logo" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
