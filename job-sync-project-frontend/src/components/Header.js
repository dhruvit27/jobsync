import React from "react";
import { useLocation } from "react-router-dom"; 
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const headerBtns = [
    {
      link: "/",
      text: "Home",
    },
    { link: '/about', text: 'About' },
    { link: '/contact', text: 'Contact' },
    
    {
      link: "/companyDetails",
      text: "Company Details",
    },
    
    {
      link: "/Sign-Up",
      text: "SignUp",
    },
    { link: '/login', text: 'Login' },
    {
      link: "/Admin",
      text: "Admin",
    },
  ];
  const location = useLocation();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" >Job Sync Solution</Navbar.Brand>
        <Nav className="me-auto">
          {headerBtns.map((headerBtn) => (
            <Nav.Link href={headerBtn.link} key={headerBtn.link} style={{ color: '#fff' }} 
            className="header-link" active={location.pathname === headerBtn.link}>
              {headerBtn.text}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
