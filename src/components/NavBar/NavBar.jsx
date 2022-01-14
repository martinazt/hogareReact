import React from "react";
import CartWidget from "./CartWidget/CartWidget.jsx";
import * as ReactBootStrap from "react-bootstrap";

export default function Navbar ({}){
    return (
        <>
                
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
                <ReactBootStrap.Container>
                <ReactBootStrap.Navbar href="#home">HOME</ReactBootStrap.Navbar>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="me-auto">
                    <ReactBootStrap.Nav.Link href="#home" style={{ color: 'black' }}>Nosotros</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#features" style={{ color: 'black' }}>Productos</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing" style={{ color: 'black' }}>Contactanos</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.NavDropdown title="Categorias" id="collasible-nav-dropdown" >
                    <ReactBootStrap.NavDropdown.Item href="#action/3.1" style={{ color: 'black' }}>categoria 1</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.2" style={{ color: 'black' }}>categoria 2</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item href="#action/3.3" style={{ color: 'black' }}>categoria 3</ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item href="#action/3.4" style={{ color: 'black'}}>Ofertas</ReactBootStrap.NavDropdown.Item>
                    </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="#deets" style={{ font_weight:"bold" }}>Mis pedidos</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#link"><CartWidget/></ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </>
    )
}