import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Footer = () => {
  const footerBtns = [
    {
      link: "/",
      text: "Home",
      
    },
    {
      link: "/about",
      text: "About",
      
    },
    {
      link: "/contact",
      text: "Contact",
      
    },
    {
      link: "/companyDetails",
      text: "Company Details",
    },
    {
      link: "/Sign-Up",
      text: "SignUp",
    },
    {
      link: "/login",
      text: "Login",
      
    },
    {
      link: "/Admin",
      text: "Admin",
    },
  ];

  return (
    <footer className="py-2 mt-3 w-100 bg-dark d-flex flex-column">
      <Container>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {footerBtns.map((footerBtn) => (
            <Nav.Link
              href={footerBtn.link}
              key={footerBtn.link}
              style={{ color: "#fff" }}
              className="nav-item header-link nav-link px-2"
            >
              {footerBtn.text}
            </Nav.Link>
          ))}
        </ul>
        <p className="text-center  mt-auto">
          © 2024 Conestoga College, (Group 7)
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
