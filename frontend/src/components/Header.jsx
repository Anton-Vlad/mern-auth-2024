import { Navbar, Nav, Container, NavbarCollapse } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expanded='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>MERN Auth</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <NavbarCollapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/login'>
                                <FaSignInAlt /> Sign In
                            </Nav.Link>
                            <Nav.Link href='/register'>
                                <FaSignInAlt /> Sign Up
                            </Nav.Link>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;