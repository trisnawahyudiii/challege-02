import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import logo from '../img/logo.png';

function NavbarComponent() {
    return (
        <>
            <Navbar key="md" bg="light" expand="md" className="mb-3 sticky-top">
                <Container fluid="md">
                    <Navbar.Brand href="#">
                        <Image src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                                <Nav.Link href="#our-services">Our Serices</Nav.Link>
                                <Nav.Link href="#why-us">Why Us</Nav.Link>
                                <Nav.Link href="#testimonial">Testimonial</Nav.Link>
                                <Nav.Link href="#faq-section">FAQ</Nav.Link>
                                <Nav.Link>
                                    <Button variant="success">Register</Button>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;
