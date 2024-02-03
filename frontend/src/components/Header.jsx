import { Navbar, Nav, Container, NavbarCollapse } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expanded='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand >MERN Auth</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <NavbarCollapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <FaSignInAlt /> Sign In
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/register'>
                                <Nav.Link>
                                    <FaSignInAlt /> Sign Up
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;