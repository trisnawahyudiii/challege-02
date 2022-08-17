import React from 'react';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import carImage from '../img/img_car.png';

const Hero = () => {
    return (
        <div id="hero-section">
            <Row>
                {/* ini buat text */}
                <Col md={6} xs={12} className="align-items-center p-5">
                    <h1>Sewa & Rental Mobil Terbaik di Kawasan Bali</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <button class="btn btn-success">Mulai Sewa Mobil</button>
                </Col>
                {/* ini buat image */}
                <Col md={6} xs={12}>
                    <Image src={carImage} fluid className="hero-ills"/>
                </Col>
            </Row>
        </div>
    );
};

export default Hero;
