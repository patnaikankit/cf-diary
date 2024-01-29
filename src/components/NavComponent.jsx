import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CF-Diary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default NavComponent;