import {Container, Nav, Navbar} from 'react-bootstrap';
import {useEffect, useState} from "react";
import logo from '../assets/image/logo.svg'
import navIcon2 from '../assets/image/nav-icon2.svg'
import navIcon3 from '../assets/image/nav-icon3.svg'

export const NavBar = () => {
    const [activePage, setActivePage] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 500 ? setScrolled( false) :  setScrolled(true)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActivePage = (value) => {
        setActivePage(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "unscrolled"}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo || ''} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activePage === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivePage('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activePage === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivePage('about')}>About</Nav.Link>
                        <Nav.Link href="#service" className={activePage === 'service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivePage('service')}>Services</Nav.Link>
                        <Nav.Link href="#faq" className={activePage === 'faq' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivePage('faq')}>FAQ</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.facebook.com/ssvAdK" target={"_blank"} rel="noreferrer"><img src={navIcon2} alt=""/></a>
                            <a href="https://www.instagram.com/adk20official?igsh=MXByMWl3Z2prbGxycA==" target={"_blank"} rel="noreferrer"><img src={navIcon3} alt=""/></a>
                            {/*<a href="#telegram"><img src={navIcon4} alt=""/></a>*/}
                        </div>
                        <a href={"#contact"}>
                        <button className={activePage === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActivePage('contact')}><span>Let's Connect</span></button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}