import React,{Component} from "react"
import { Navbar,Nav,NavDropdown,FormControl,Button,Form } from "react-bootstrap";

class Header extends Component{
    constructor (props) {
        super(props)

    }
    render(){
        return (
            <>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Covid19Bharat</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Essentials</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>
            </>
        )
    };
}

export default Header;