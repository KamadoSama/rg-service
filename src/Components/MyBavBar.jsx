import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "../assets/logo.png"
import { useState, useEffect } from 'react';
export const MyNavBar =()=> {
  const [active, setActive] = useState(JSON.parse(sessionStorage.getItem('active')))
  const [scrolled , setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = () =>{
      if(window.scrollY > 20 ){
        
        setScrolled(true)
      }else{
        
        setScrolled(false)
        
      }
    }
    window.addEventListener("scroll", onScroll)
    return ()=>{ window.addEventListener("scroll",onScroll)}
  },[])

  useEffect ( ()=>{
     sessionStorage.setItem('active', JSON.stringify(active))
  }, [active])

  useEffect(()=>{
    const storedActive =  sessionStorage.getItem('active')
    
    if ( !storedActive ) {
      // console.log('yo')
      setActive("accueil")
      
    }else{
      setActive(JSON.parse(storedActive));
    }
    
  }, [])
  const onActive = (value) =>{  
    setActive(value)
  }
  useEffect(()=>{
    if (active != `${document.title}`){
      setActive(`${document.title}`)
    }

  }, [])
  
  return (
    
  <Navbar expand="md" className={scrolled ? " fixed-top navbar-custom animate__animated animate__fadeIn" :"navbar-custom"}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo}   width="80" height="80" className="d-inline-block align-top" alt='logo' /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto text-center mx-auto mr-3 my-lg-0 mynavbar  justify-content-between"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className={active === 'accueil' ? 'a-w active' : 'a-w'} style={{borderRadius: '20px 0px 0px 20px'}} onClick={()=>onActive("accueil")} >Accueil</Nav.Link>
            <NavDropdown title="Service" className={active==='service' ? 'active' : ''} onClick={()=>{onActive("service")}} id="navbarScrollingDropdown">
              <NavDropdown.Item  href="/evenementiel"  onClick={()=>{onActive("service")}}>Evenementiel</NavDropdown.Item>
              <NavDropdown.Item href="/informatique"  onClick={()=>{onActive("service")}}> Informatique</NavDropdown.Item>
          
              <NavDropdown.Item href="/location"  onClick={()=>{onActive("service")}}  >Location / Vente</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#apropos" className={active=== "apropos" ?  "a-w active" : "a-w" } onClick={()=>{onActive("apropos")}}  >A propos</Nav.Link>
          
            <Nav.Link href="/contact" className={active === "contact" ? 'a-w active' : 'a-w'}  onClick={()=>{onActive("contact")}} style={{borderRadius:'0px 20px 20px 0px'}}>
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
            <Button variant="outline-primary">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
