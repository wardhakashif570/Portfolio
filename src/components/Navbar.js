import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

    // const navbar = document.querySelector('#navbar');
    window.onscroll = () => {
        if (window.scrollY > 56) {
            document.querySelector('#navbar').classList.add('navbar-active');
            document.querySelectorAll('.nav').forEach(nav => {
                nav.classList.add('nav-active');
            });
        } 
        else {
            document.querySelector('#navbar').classList.remove('navbar-active');
            document.querySelectorAll('.nav').forEach(nav => {
                nav.classList.remove('nav-active');
            });
        }
    };

    return (
        <>

            <Navbar style={{ backgroundColor: 'transparent' }} sticky="top" id="navbar">

                <Nav className="mx-auto">
                    <Nav.Link href='#aboutme' className="nav">
                        About
                    </Nav.Link>
                    <Nav.Link href='#myWork' className="nav">
                        Projects
                    </Nav.Link>
                    <Nav.Link href='#tech' className="nav">
                        Technologies
                    </Nav.Link>
                    <Nav.Link href='#contact' className="nav">
                        Connect
                    </Nav.Link>
                </Nav>
            </Navbar>


        </>
    )
}

export default NavBar
