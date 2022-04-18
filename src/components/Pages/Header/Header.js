import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from './CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className=''>
                    <Navbar.Brand as={Link} to='/'>Insaf Law</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={CustomLink} to='/'>Home</Nav.Link>
                            <Nav.Link href='/#services' >Services</Nav.Link>
                            {/* <Nav.Link as={Link} to='/about'>About</Nav.Link> */}
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={CustomLink} to='/about'>About</Nav.Link>
                            <Nav.Link as={CustomLink} to='/blog'>Blog</Nav.Link>
                            {
                                user && <Nav.Link as={CustomLink} to='/profile'>{user.email}</Nav.Link>
                            }
                            
                            {
                                user ?
                                <Nav.Link onClick={handleLogOut} as={CustomLink} to='/login'>Sign Out</Nav.Link>
                                    :
                                <Nav.Link as={CustomLink} to='/profile'>Login</Nav.Link>
                            }
                            
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;