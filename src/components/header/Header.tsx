import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import { useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="header"
      >
        <Container>
          <Navbar.Brand href="/" className="fs-4 fw-bold">
            &#123;Finsweet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav-line" activeKey={location?.pathname}>
              <Nav.Link href="/" className={`${location.pathname === "/" ? "active": ''}nav-link`}>
                Home
              </Nav.Link>
              <Nav.Link href="/service" className={`${location.pathname === "/service" ? "active": ''}nav-link`}>
                Service
              </Nav.Link>
              <Nav.Link href="/company" className={`${location.pathname === "/company" ? "active": ''}nav-link`}>
                Company
              </Nav.Link>
              <Nav.Link href="/career" className={`${location.pathname === "/career" ? "active": ''}nav-link`}>
                Career
              </Nav.Link>
              <Nav.Link href="/blog" className={`${location.pathname === "/blog" ? "active": ''}nav-link`}>
                Blog
              </Nav.Link>
              <Nav.Link href="/contact-us" className={`${location.pathname === "/contact-us" ? "active": ''}nav-link`}>
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
