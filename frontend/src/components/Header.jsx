import { Navbar, Nav, Container, NavbarCollapse, NavDropdown, Badge } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const { userInfo } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout()); // clear localStorage
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

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
                            { userInfo  ? (
                                <>
                                    <NavDropdown title={userInfo.name} id="username">
                                        <LinkContainer to='/profile'>
                                            <NavDropdown.Item>
                                                Profile
                                            </NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
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
                                </>
                            ) }
                            
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;