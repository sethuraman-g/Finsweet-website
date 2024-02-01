import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";


const Header = () => {
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
              <Nav.Link href="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link href="/service" className="nav-link">
                Service
              </Nav.Link>
              <Nav.Link href="/company" className="nav-link">
                Company
              </Nav.Link>
              <Nav.Link href="/career" className="nav-link">
                Career
              </Nav.Link>
              <Nav.Link href="/blog" className="nav-link">
                Blog
              </Nav.Link>
              <Nav.Link href="/contact-us" className="nav-link">
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
