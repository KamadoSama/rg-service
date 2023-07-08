import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "../assets/logo.png"

export const MyNavBar =()=> {
  return (
    
  <Navbar expand="md" className=" fixed-top navbar-custom">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo}   width="80" height="80" className="d-inline-block align-top" alt='logo' /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-auto mr-3 my-lg-0 mynavbar  justify-content-between"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='a-w' style={{borderRadius: '20px 0px 0px 20px'}}>Accueil</Nav.Link>
            <NavDropdown title="Service"  id="navbarScrollingDropdown">
              <NavDropdown.Item  href="#action3">Evenementiel</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Informatique</NavDropdown.Item>
          
              <NavDropdown.Item href="#action5"  >Location / Vente</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className='a-w'  >A propos</Nav.Link>
          
            <Nav.Link href="#" className='a-w' style={{borderRadius:'0px 20px 20px 0px'}}>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Rechercher.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
